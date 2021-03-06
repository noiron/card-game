import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, PropTypes as MobxPropTypes } from 'mobx-react';

import Card from './components/card';
import CardView from './components/card-view';
import Hero from './components/hero';
import Monster from './components/monster';
import Effect from './components/effect';
import GameOver from './components/game-over';
import EffectModel from './model/effect-model';
import DropArea from './components/drop-area';
import History from './components/history';
import NextTurn from './components/next-turn';

import { card_target, game_turn, run_status } from './constants';
import config from './config';
// import { toJS } from 'mobx';
import rough from 'roughjs';
import { GameStateModel } from './model/game-state-model';
import CardModel from './model/card-model';
import HeroModel from './model/hero-model';
import MonsterModel from './model/monster-model';
import { Decks } from './decks';
import { delay } from './utils';

const game_board_width = 700;
const game_board_height = 500;

interface IProps {
  gameState: GameStateModel;
  decks: Decks;
  hero: HeroModel;
  boss: MonsterModel;
}

@observer
class App extends Component<IProps> {

  componentDidMount() {
    setBackground();
  }

  // 玩家出牌
  playCard = (id: string) => {
    const { gameState, decks } = this.props;
    if (gameState.currentTurn !== game_turn.hero) {
      return;
    }

    // 根据id从玩家手上的牌组中移除这张牌
    const currentCard = decks.heroHand.filter(card => card.id === id)[0];
    this.calculateCardEffect(currentCard);
    decks.removeHeroCard(id);
  }

  calculateCardEffect = (currentCard: CardModel) => {
    const { hero, boss, gameState } = this.props;

    // 出牌效果
    let effectName;
    let effectValue = 0;
    let effect: EffectModel = null;

    if (currentCard.name === '攻击') {
      effectName = '生命值';
      effectValue = -currentCard.attack;

      effect = new EffectModel({
        name: effectName,
        value: effectValue,
        target: currentCard.target,
      });

      if (currentCard.target === card_target.monster) {
        boss.receiveAttack(currentCard.attack);
      } else {
        hero.receiveAttack(currentCard.attack);
      }

      if (boss.life <= 0) {
        gameState.runStatus = run_status.win;
      } else if (hero.life <= 0) {
        gameState.runStatus = run_status.lose;
      }

    } else if (currentCard.name === '防御') {
      effectName = '护甲';
      effectValue = currentCard.armor;

      effect = new EffectModel({
        name: effectName,
        value: '+' + effectValue,
        target: currentCard.target,
      });

      if (currentCard.target === card_target.hero) {
        hero.addArmor(effectValue);
      } else {
        boss.addArmor(effectValue);
      }
    }

    if (effect) {
      gameState.effects.push(effect);

      // TODO: 同时有两个 effect 时的处理

      // 等待后删除
      setTimeout(() => {
        gameState.effects.splice(gameState.effects.length - 2);
      }, 1500);
    }
  }

  nextTurn = () => {
    const { gameState } = this.props;
    // TODO: 利用 reaction 来检查 currentTurn 的改变，自动触发
    gameState.currentTurn = game_turn.monster;
    gameState.toggleNextTurnTip();
    // 当切换回合的 tip 消失后，开始执行对手的操作
    delay(1500).then(() => {
      this.bossStartAction();
    });
  }

  bossStartAction() {
    // boss 依次发牌
    const { decks, gameState, boss, hero } = this.props;
    const { monsterHand } = decks;

    // 检查双方是否都没有牌了，是的话则比较双方血量，游戏结束
    if (decks.heroHand.length === 0 && decks.monsterHand.length === 0 &&
      decks.heroDeck.length === 0 && decks.monsterDeck.length === 0
    ) {
      gameState.runStatus = (boss.life < hero.life) ? run_status.win : run_status.lose;
      return;
    }

    // 非第一回合时，给敌人发两张牌
    if (gameState.turnCount > 1) {
      decks.dealMonsterCards();
    }

    const len = monsterHand.length;
    if (len === 0) {
      delay(2000).then(() => {
        decks.monsterTurnOver = true;
      })
      return;
    }

    monsterHand.forEach((card, index) => {
      setTimeout(() => {
        if (gameState.isGameOver) { return; }
        this.calculateCardEffect(card);
        decks.removeBossCard(card.id);
        if (index >= len - 1) {
          decks.monsterTurnOver = true;
        }
      }, (index + 1) * 1000);
    })

  }

  showRunStatus() {
    const { runStatus, isGameOver } = this.props.gameState;

    if (runStatus === run_status.running) { return null; }

    if (isGameOver) {
      return <GameOver status={runStatus} />
    }

    return null;
  }

  toggleHistory = () => {
    const { gameState } = this.props;
    gameState.showHistory = !gameState.showHistory;
  }

  render() {
    const { hero, boss, decks, gameState } = this.props;
    const { usedCards, currentCards } = decks;

    return (
      <Wrapper className="App">
        <Background id="svg-background" />
        <TurnFlag>
          第{gameState.turnCount}回合{'  '}  
          {gameState.currentTurn === game_turn.hero ? '你的' : '对手的'}回合
        </TurnFlag>

        <DropArea>
          <EnemyArea>
            <Monster
              life={boss.life}
              armor={boss.armor}
            />
          </EnemyArea>

          <Dustbin>
            {
              currentCards.map((card) => {
                return <CardView
                  name={card.name}
                  desc={card.desc}
                  attack={card.attack}
                  armor={card.armor}
                  source={card.source}
                  playCard={() => { return; }}
                  extraInfo={card.extraInfo}
                  key={card.id}
                />
              })
            }
          </Dustbin>
        </DropArea>

        <PlayerCardsArea>
          <Hero
            life={hero.life}
            armor={hero.armor}
            maxLife={hero.maxLife}
            className="person"
          />
          <div className="card-list">
          {
            decks.heroHand.map((card, index) => {
              return <Card
                name={card.name}
                id={card.id}
                // index={index}
                desc={card.desc}
                attack={card.attack}
                armor={card.armor}
                source={card.source}
                extraInfo={card.extraInfo}
                playCard={() => this.playCard(card.id)}
                key={card.id}
              />
            })
          }
          </div>

          <ShowHistoryButton onClick={this.toggleHistory}>
            显示历史
            </ShowHistoryButton>
          {gameState.currentTurn === game_turn.hero
            && <NextTurnButton onClick={this.nextTurn}>下一回合</NextTurnButton>}
        </PlayerCardsArea>

        {gameState.effects.map(e => {
          return <Effect
            name={e.name}
            value={e.value}
            target={e.target}
            key={Math.random()}
          />
        })}

        {/* 显示游戏内部信息 */}
        {
          config.show_game_info && (
            <div style={{ marginTop: '50px' }}>
              <p>你的手牌数量：{decks.heroHand.length}</p>
              <p>你的牌堆中的卡牌数量：{decks.heroDeck.length}</p>
              <p>敌方手牌数量：{decks.monsterHand.length}</p>
              <p>敌方牌堆中的卡牌数量：{decks.monsterDeck.length}</p>
            </div>
          )
        }

        {
          gameState.showHistory &&
          <History usedCards={usedCards} closeHistory={this.toggleHistory} />
        }

        {this.showRunStatus()}

        {gameState.showNextTurnTip && <NextTurn turn={gameState.currentTurn} />}
      </Wrapper>
    );
  }
}

// App.propTypes = {
//   hero: MobxPropTypes.observableObject.isRequired,
//   boss: MobxPropTypes.observableObject.isRequired,
//   decks: MobxPropTypes.observableObject.isRequired,
//   gameState: MobxPropTypes.observableObject.isRequired,
// }

export default App;

function setBackground() {
  const svgBg: any = document.getElementById('svg-background');
  const rc = rough.svg(svgBg);
  const node = rc.rectangle(10, 10, 740, 540, {
    roughness: 1.5
  });
  svgBg.appendChild(node);
}


const Wrapper = styled.div`
  width: ${game_board_width}px;
  min-height: ${game_board_height}px;
  /* border: 2px solid #000; */
  /* border-radius: 15px; */
  padding: 20px;
  margin: 40px auto;
  position: relative;
`;

const Background = styled.svg`
  width: ${game_board_width + 80}px;
  height: ${game_board_height + 80}px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const TurnFlag = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%);
  color: green;
  white-space: pre;
`;

const EnemyArea = styled.div`
  width: 100%;
  height: 130px;
  /* border: 2px solid pink; */
  /* border-radius: 10px; */
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const playerAreaHeight = 150;

const PlayerCardsArea = styled.div`
  width: 100%;
  height: ${playerAreaHeight}px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  /* border: 2px solid lightgreen; */
  /* border-radius: 10px; */
  box-sizing: border-box;
  position: relative;

  .card {
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .person {
    margin-right: 20px;
  }

  .card-list {
    width: calc(100% - 150px);
    display: flex;
    overflow-x: auto;
    height: 165px;
    position: absolute;
    left: 160px;
    top: 10px;
  }
`;

const Dustbin = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  display: -webkit-box;
  display: box;
  justify-content: center;
  align-items: center;
  /* border: 2px solid lightblue; */
  /* border-radius: 10px; */
  margin: 10px 0;
  overflow-x: auto;

  .card {
    margin-right: 20px;
    flex: 0 0 90px;
  }

  .card.monster {
    border-color: red;
  }
`;

// TODO: 按钮样式可复用
const ShowHistoryButton = styled.button`
  width: 100px;
  height: 50px;
  border: 2px solid #ddd;
  position: absolute;
  top: 220px;
  right: 180px;
`;

const NextTurnButton = styled.button`
  width: 100px;
  height: 50px;
  border: 2px solid #ddd;
  position: absolute;
  top: 220px;
  right: 50px;
`;

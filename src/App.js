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

import { card_target, game_turn, run_status } from './constants';

const Wrapper = styled.div`
  width: 700px;
  min-height: 500px;
  border: 2px solid #000;
  border-radius: 15px;
  padding: 10px;
  margin: 40px auto;
  position: relative;
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
  border: 2px solid pink;
  box-sizing: border-box;
  border-radius: 10px;
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
  border: 2px solid lightgreen;
  box-sizing: border-box;
  border-radius: 10px;

  .card {
    margin-right: 20px;
  }

  .person {
    margin-right: 20px;
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
  border: 2px solid lightblue;
  margin: 10px 0;
  border-radius: 10px;
  overflow-x: scroll;

  .card {
    margin-right: 20px;
    flex: 0 0 90px;
  }

  .card.monster {
    border-color: red;
  }
`;

@observer
class App extends Component {

  // 玩家出牌
  playCard = (id, index) => {
    const { gameState } = this.props;
    
    if (gameState.currentTurn !== game_turn.hero) {
      return;
    }

    const { decks } = this.props;

    // 根据id从玩家手上的牌组中移除这张牌
    const currentCard = decks.heroDeck[index];
    decks.removeHeroCard(id, index);
    this.calculateCardEffect(currentCard);
  }

  calculateCardEffect = (currentCard) => {
    const { hero, boss, gameState } = this.props;

    // 出牌效果
    let effectName;
    let effectValue = 0;
    let effect = null;

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
    gameState.currentTurn = game_turn.monster;
    this.bossStartAction();
  }

  bossStartAction() {
    // boss 依次发牌
    const { decks, gameState } = this.props;
    const { bossDeck } = decks;

    bossDeck.forEach((card, index) => {
      setTimeout(() => {
        if (gameState.isGameOver) return;
        this.calculateCardEffect(card);
        decks.removeBossCard(card.id, index);
        if (index >= bossDeck.length - 1) {
          decks.monsterTurnOver = true;
        }

      }, index * 1000);
    })

  }

  showRunStatus() {
    const { runStatus, isGameOver } = this.props.gameState;

    if (runStatus === run_status.running) return null;

    if (isGameOver) {
      return <GameOver status={runStatus} />
    }

    return null;
  }

  render() {
    const { hero, boss, decks, gameState } = this.props;
    const { usedCards } = decks;

    return (
      <Wrapper className="App">
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
              usedCards.map((card, index) => {
                return <CardView
                  name={card.name}
                  desc={card.desc}
                  attack={card.attack}
                  armor={card.armor}
                  index={index}
                  source={card.source}
                  playCard={() => { }}

                  key={Math.random()}
                ></CardView>
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
          {
            decks.heroDeck.map((card, index) => {
              return <Card
                name={card.name}
                desc={card.desc}
                attack={card.attack}
                armor={card.armor}
                source={card.source}
                playCard={() => this.playCard(card.id, index)}

                key={Math.random()}
              ></Card>
            })
          }

          {gameState.currentTurn === game_turn.hero
            && <button onClick={this.nextTurn}>下一回合</button>}
        </PlayerCardsArea>

        {gameState.effects.map(e => {
          return <Effect
            name={e.name}
            value={e.value}
            target={e.target}

            key={Math.random()}
          />
        })}


        {this.showRunStatus()}
      </Wrapper>
    );
  }
}

App.propTypes = {
  hero: MobxPropTypes.observableObject.isRequired,
  boss: MobxPropTypes.observableObject.isRequired,
  decks: MobxPropTypes.observableObject.isRequired,
  gameState: MobxPropTypes.observableObject.isRequired,
}


export default App;

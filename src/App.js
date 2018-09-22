import React, { Component } from 'react';
import styled from 'styled-components';
import { observer, PropTypes } from 'mobx-react';

import Card from './components/card';
import Hero from './components/hero';
import Boss from './components/boss';
import Effect from './components/effect';
import GameOver from './components/game-over';
import EffectModel from './model/effect-model';

import { card_target } from './constants';

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
  constructor() {
    super();

    this.state = {
      effects: [],
      status: '',
      currentTurn: 'hero',
    }
  }


  // 玩家出牌
  playCard = (id, index) => {
    
    if (this.state.currentTurn !== 'hero') {
      return;
    }

    const { decks } = this.props;

    // 根据id从玩家手上的牌组中移除这张牌
    const currentCard = decks.heroDeck[index];
    decks.removeHeroCard(id, index);
    this.calculateCardEffect(currentCard);
  }

  calculateCardEffect = (currentCard) => {
    const { hero, boss } = this.props;

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

      if (currentCard.target === card_target.enemy) {
        boss.receiveAttack(currentCard.attack);
      } else {
        hero.receiveAttack(currentCard.attack);
      }

      if (boss.life <= 0) {
        this.setState({ status: 'over' });
      }

    } else if (currentCard.name === '防御') {
      effectName = '护甲';
      effectValue = currentCard.armor;

      effect = new EffectModel({
        name: effectName,
        value: '+' + effectValue,
        target: currentCard.target,
      });

      if (currentCard.target === card_target.player) {
        hero.addArmor(effectValue);
      } else {
        boss.addArmor(effectValue);
      }
    }

    if (effect) {
      const newEffects = [...this.state.effects, effect];
      this.setState({ effects: newEffects });

      // 等待后删除
      setTimeout(() => {
        newEffects.splice(newEffects.length - 2);
        this.setState({ effects: newEffects });
      }, 1500);
    }
  }

  nextTurn = () => {
    this.setState({ currentTurn: 'boss' });
    this.bossStartAction();
  }

  bossStartAction() {
    // boss 依次发牌
    const { decks } = this.props;
    const { bossDeck } = decks;

    bossDeck.forEach((card, index) => {
      setTimeout(() => {
        this.calculateCardEffect(card);
        decks.removeBossCard(card.id, index);
      }, index * 2000);
    })

    setTimeout(() => {
      this.setState({ currentTurn: 'hero' })
    }, bossDeck.length * 2000)
  }

  render() {
    const { effects, status } = this.state;
    const { hero, boss, decks } = this.props;
    const { usedCards } = decks;

    return (
      <Wrapper className="App">
        {this.state.currentTurn === 'hero'
          ? <TurnFlag>你的回合</TurnFlag>
          : <TurnFlag>对手的回合</TurnFlag>
        }
        <EnemyArea>
          <Boss 
            life={boss.life}
            armor={boss.armor}
          />
        </EnemyArea>

        <Dustbin>
        {
          usedCards.map((card, index) => {
            return <Card
              name={card.name}
              desc={card.desc}
              attack={card.attack}
              armor={card.armor}
              index={index}
              source={card.source}
              playCard={() => {}}

              key={Math.random()}
            ></Card>
          })
        }
        </Dustbin>

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

          {this.state.currentTurn === 'hero'
            && <button onClick={this.nextTurn}>下一回合</button>}
        </PlayerCardsArea>

        {effects.map(e => {
          return <Effect
            name={e.name}
            value={e.value}
            target={e.target}

            key={Math.random()}
          />
        })}


        {status === 'over' && <GameOver />}
      </Wrapper>
    );
  }
}

App.propTypes = {
  hero: PropTypes.observableObject.isRequired,
  boss: PropTypes.observableObject.isRequired,
  decks: PropTypes.observableObject.isRequired,
}


export default App;

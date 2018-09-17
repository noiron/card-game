import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './components/card';
import Hero from './components/hero';
import Boss from './components/boss';
import Effect from './components/effect';
// import CardModel from './model/card-model';
import HeroModel from './model/hero-model';
import BossModel from './model/boss-model';
import EffectModel from './model/effect-model';
import GameOver from './components/game-over';

import hero_deck from './hero-deck';

const Wrapper = styled.div`
  width: 700px;
  min-height: 500px;
  border: 2px solid #000;
  border-radius: 15px;
  padding: 10px;
  margin: 40px auto;
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lightblue;
  margin: 10px 0;
  border-radius: 10px;

  .card {
    margin-right: 20px;
  }
`;


const hero = new HeroModel({
  life: 20,
  armor: 0
});

const boss = new BossModel({
  life: 50,
  armor: 0
});

class App extends Component {
  constructor() {
    super();

    this.state = {

      // 玩家的牌组
      playerCards: [...hero_deck],

      // 敌人牌组
      enemyCards: [...hero_deck.slice(0, 2)],

      // 使用过的牌
      usedCards: [hero_deck[0]],

      effects: [],
      status: '',
      currentTurn: 'hero',

    }
  }


  // 玩家出牌
  playCard = index => {
    
    if (this.state.currentTurn !== 'hero') {
      return;
    }

    // 根据索引从玩家手上的牌组中移除这张牌
    const { playerCards, usedCards } = this.state;
    const currentCard = playerCards[index]; 
    const leftCards = playerCards.filter((card, i) => index !== i);
    const newUserdCards = [...usedCards, currentCard];

    this.setState({
      playerCards: leftCards,
      usedCards: newUserdCards,
    });

    this.calculateCardEffect(currentCard);

  }

  calculateCardEffect = (currentCard) => {
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
        target: 'enemy'
      });

      boss.life += effectValue;

      if (boss.life <= 0) {
        this.setState({ status: 'over' });
      }

    } else if (currentCard.name === '防御') {
      effectName = '护甲';
      effectValue = currentCard.armor;

      effect = new EffectModel({
        name: effectName,
        value: '+' + effectValue,
        target: 'player'
      });

      hero.armor += effectValue;
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
    this.setState({
      currentTurn: 'boss'
    });

    this.bossStartAction();
  }

  bossStartAction() {
    // boss 依次发牌

    this.state.enemyCards.forEach((card, index) => {
      setTimeout(() => this.calculateCardEffect(card), index * 2000);
    })

    setTimeout(() => {
      this.setState({ currentTurn: 'hero' })
    }, this.state.enemyCards.length * 2000)
  }



  render() {
    const { playerCards, usedCards, effects, status } = this.state;

    return (
      <Wrapper className="App">
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
          playerCards.map((card, index) => {
            return <Card
              name={card.name}
              desc={card.desc}
              attack={card.attack}
              armor={card.armor}
              playCard={() => this.playCard(index)}

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
          />
        })}


        {status === 'over' && <GameOver />}
      </Wrapper>
    );
  }
}

export default App;

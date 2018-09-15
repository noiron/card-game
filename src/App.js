import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './components/card';
import Hero from './components/hero';
import Boss from './components/boss';
import Effect from './components/effect';
import CardModel from './model/card-model';
import HeroModel from './model/hero-model';
import BossModel from './model/boss-model';
import EffectModel from './model/effect-model';

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


// 创建一个卡牌实例
const firstCard = new CardModel({
  name: '攻击',
  desc: '🐓',
  attack: 100,
  armore: 0,
});

const secondCard = new CardModel({
  name: '防御',
  desc: '🛡',
  attack: 0,
  armor: 1,
});

const thirdCard = new CardModel({
  name: '攻击',
  desc: '⚔',
  attack: 1,
  armor: 0,
});

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
      playerCards: [firstCard, secondCard, thirdCard],

      // 敌人牌组
      enemyCards: [firstCard],

      // 使用过的牌
      usedCards: [firstCard],


      effects: []

    }
  }


  // 玩家出牌
  playCard = index => {
    // 根据索引从玩家手上的牌组中移除这张牌
    const { playerCards, usedCards } = this.state;
    const currentCard = playerCards[index]; 
    const leftCards = playerCards.filter((card, i) => index !== i);
    const newUserdCards = [...usedCards, currentCard];

    this.setState({
      playerCards: leftCards,
      usedCards: newUserdCards,
    });

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

  render() {
    const { playerCards, usedCards, effects } = this.state;

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
        </PlayerCardsArea>

        {effects.map(e => {
          return <Effect
            name={e.name}
            value={e.value}
            target={e.target}
          />
        })}

      </Wrapper>
    );
  }
}

export default App;

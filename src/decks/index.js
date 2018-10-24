import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';
import { card_target, card_source, game_turn } from '../constants';
import { observable, action, reaction } from 'mobx';
import gameState from '../model/game-state-model';


class Decks {
  @observable heroDeck = [];
  @observable bossDeck = [];
  @observable usedCards = [];
  
  @observable monsterUsedCardsCount = 0;
  @observable monsterTurnOver = false;

  constructor() {
    seeds.heroSeeds.forEach(seed => {
      const card = generateCardFromSeed(card_source.hero, seed);
      this.heroDeck.push(card);
    });

    seeds.monsterSeeds.forEach(seed => {
      const card = generateCardFromSeed(card_source.monster, seed);
      this.bossDeck.push(card); 
    });
  }

  @action removeHeroCard(id, index) {
    this.usedCards.push(this.heroDeck[index]);
    this.heroDeck = this.heroDeck.filter(card => card.id !== id);
  }

  @action removeBossCard(id, index) {
    this.usedCards.push(this.bossDeck[index]);
  }

  // 给玩家发牌的方法
  @action dealCards() {
    // TODO: 随机生成不同种类的卡牌
    const card1 = generateCardFromSeed(card_source.hero, seeds.heroSeeds[0]);
    const card2 = generateCardFromSeed(card_source.hero, seeds.heroSeeds[3]);
    this.heroDeck.push(card1, card2);
  }

}

const decks = new Decks();

// reaction 监听对手回合是否已结束，就 delay 后切换到玩家回合
reaction(
  () => decks.monsterTurnOver,
  (isOver, reaction)  => {
    if (isOver) {
      gameState.currentTurn = game_turn.hero;
      gameState.increaseTurnCount();
      decks.monsterTurnOver = false;
      decks.dealCards();
    }
  }
)

export default decks;


function generateCardFromSeed(source, seed) {
  let target;
  if (source === card_source.hero) {
    target = seed.positive ? card_target.hero : card_target.monster;
  } else {
    target = seed.positive ? card_target.monster : card_target.hero;
  }
  
  const card = new CardModel({
    ...seed,
    id: utils.uuid(),
    target,
    source,
  });
  return card;
}
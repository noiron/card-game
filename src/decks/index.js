/**
 * deck 指的是牌库中可用的牌
 */

import CardModel from "../model/card-model";
import seeds from './seeds';
import * as utils from '../utils';
import { card_target, card_source, game_turn, init_cards_num } from '../constants';
import { observable, action, reaction } from 'mobx';
import gameState from '../model/game-state-model';
import { toJS } from 'mobx';


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

class Decks {
  @observable heroDeck = [];  // 牌堆
  @observable monsterDeck = [];
  @observable usedCards = [];
  @observable heroHand = [];  // 手牌
  @observable monsterHand = [];
  
  @observable monsterUsedCardsCount = 0;
  @observable monsterTurnOver = false;

  constructor() {
    utils.shuffle(seeds.heroSeeds); // 游戏开始时将牌组随机化
    seeds.heroSeeds.forEach(seed => {
      const card = generateCardFromSeed(card_source.hero, seed);
      this.heroDeck.push(card);
    });
    // 游戏开始时发若干张牌作为玩家的初始手牌
    this.heroHand = this.heroDeck.splice(0, init_cards_num.hero);

    utils.shuffle(seeds.monsterSeeds);
    seeds.monsterSeeds.forEach(seed => {
      const card = generateCardFromSeed(card_source.monster, seed);
      this.monsterDeck.push(card); 
    });
    this.monsterHand = this.monsterDeck.splice(0, init_cards_num.monster);
  }

  // 玩家出牌
  @action removeHeroCard(id, index) {
    this.usedCards.push(this.heroHand[index]);
    this.heroHand = this.heroHand.filter(card => card.id !== id);
  }

  // 敌人出牌
  @action removeBossCard(id, index) {
    console.log('对手手牌： ', toJS(this.monsterHand));
    console.log(index);
    this.usedCards.push(this.monsterHand[0]);
    this.monsterHand = this.monsterHand.filter(card => card.id !== id);
  }

  // 给玩家发牌
  @action dealCards() {
    this.heroHand.push(...this.heroDeck.splice(0, 2));
  }

  // 给敌人发牌
  @action dealMonsterCards() {
    if (this.monsterDeck.length < 2) return;
    this.monsterHand.push(...this.monsterDeck.splice(0, 2));
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

/**
 * deck 指的是牌库中可用的牌
 */

import CardModel from "../model/card-model";
import seeds from './seeds';
import * as utils from '../utils';
import { card_target, card_source, game_turn, init_cards_num, PlayerType } from '../constants';
import { observable, action, reaction } from 'mobx';
import gameState from '../model/game-state-model';
// import { toJS } from 'mobx';


function generateCardFromSeed(source: PlayerType, seed: any) {
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

export interface IDeck {
  heroDeck: string[];
  monsterDeck: CardModel[];
  heroHand: CardModel[];  // 手牌
  monsterHand: CardModel[];
  usedCards: CardModel[]; // 所有使用过的卡牌
  currentCards: CardModel[]; // 当前正在使用的卡牌
  removeHeroCard: (id: string) => void;
}

export class Decks {
  @observable heroDeck: CardModel[] = [];  // 牌堆
  @observable monsterDeck: CardModel[] = [];
  @observable heroHand: CardModel[] = [];  // 手牌
  @observable monsterHand: CardModel[] = [];
  @observable usedCards: CardModel[] = []; // 所有使用过的卡牌
  @observable currentCards: CardModel[] = []; // 当前正在使用的卡牌
  
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
  @action removeHeroCard(id: string) {
    const card = this.heroHand.filter(card => card.id === id)[0];
    card.playedTime = new Date();
    this.usedCards.push(card);
    this.currentCards.push(card);
    this.heroHand = this.heroHand.filter(card => card.id !== id);
  }

  // 敌人出牌
  @action removeBossCard(id: string) {
    // 当前处理方式为，敌人按顺序依次出牌
    const card = this.monsterHand[0];
    card.playedTime = new Date();
    this.usedCards.push(card);
    this.currentCards.push(this.monsterHand[0])
    this.monsterHand = this.monsterHand.filter(card => card.id !== id);
  }

  // 给玩家发牌
  @action dealCards() {
    this.heroHand.push(...this.heroDeck.splice(0, 2));
  }

  // 给敌人发牌
  @action dealMonsterCards() {
    const cardsNum = Math.min(this.monsterDeck.length, 3);
    this.monsterHand.push(...this.monsterDeck.splice(0, cardsNum));
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
      decks.currentCards = [];
    }
  }, { delay: 3000 }
)

export default decks;

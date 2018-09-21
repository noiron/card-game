import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';
import { card_target } from '../constants';
import { observable, action } from 'mobx';


class Decks {
  @observable heroDeck = [];
  @observable bossDeck = [];
  @observable usedCards = [];


  constructor() {
    seeds.heroSeeds.forEach(seed => {
      // 区分正面效果和负面效果牌
      const target = seed.positive ? card_target.player : card_target.enemy;
    
      const card = new CardModel({
        ...seed,
        id: utils.uuid(),
        target,
      });
      this.heroDeck.push(card);
    });

    seeds.bossSeeds.forEach(seed => {
      const target = seed.positive ? card_target.enemy : card_target.player;

      const card = new CardModel({
        ...seed,
        id: utils.uuid(),
        target,
      });
      this.bossDeck.push(card);
    });
  }

  @action
  removeHeroCard(id, index) {
    this.usedCards.push(this.heroDeck[index]);
    this.heroDeck = this.heroDeck.filter(card => card.id !== id);
  }

}

const decks = new Decks();
export default decks;
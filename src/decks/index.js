import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';
import { card_target, card_source } from '../constants';
import { observable, action } from 'mobx';


class Decks {
  @observable heroDeck = [];
  @observable bossDeck = [];
  @observable usedCards = [];


  constructor() {
    seeds.heroSeeds.forEach(seed => {
      // 区分正面效果和负面效果牌
      const target = seed.positive ? card_target.hero : card_target.monster;
    
      const card = new CardModel({
        ...seed,
        id: utils.uuid(),
        target,
        source: card_source.hero,
      });
      this.heroDeck.push(card);
    });

    seeds.monsterSeeds.forEach(seed => {
      const target = seed.positive ? card_target.monster : card_target.hero;

      const card = new CardModel({
        ...seed,
        id: utils.uuid(),
        target,
        source: card_source.monster,
      });
      this.bossDeck.push(card);
    });
  }

  @action
  removeHeroCard(id, index) {
    this.usedCards.push(this.heroDeck[index]);
    this.heroDeck = this.heroDeck.filter(card => card.id !== id);
  }

  @action
  removeBossCard(id, index) {
    this.usedCards.push(this.bossDeck[index]);

  }

}

const decks = new Decks();
export default decks;
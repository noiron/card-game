import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';
import { card_target } from '../constants';

const heroDeck = [];
seeds.heroSeeds.forEach(seed => {
  // 区分正面效果和负面效果牌
  const target = seed.positive ? card_target.player : card_target.enemy;

  const card = new CardModel({
    ...seed,
    id: utils.uuid(),
    target,
  });
  heroDeck.push(card);
});

export default heroDeck;


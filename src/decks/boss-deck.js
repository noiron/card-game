import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';
import { card_target } from '../constants';

const bossDeck = [];
seeds.heroSeeds.forEach(seed => {
  const target = seed.positive ? card_target.enemy : card_target.player;

  const card = new CardModel({
    ...seed,
    id: utils.uuid(),
    target,
  });
  bossDeck.push(card);
});

export default bossDeck;


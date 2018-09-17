import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';


const bossDeck = [];
seeds.heroSeeds.forEach(seed => {
  const card = new CardModel({
    ...seed,
    id: utils.uuid(),
  });
  bossDeck.push(card);
});

export default bossDeck;


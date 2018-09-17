import CardModel from "../model/card-model";
import * as seeds from './seeds';
import * as utils from '../utils';


const heroDeck = [];
seeds.heroSeeds.forEach(seed => {
  const card = new CardModel({
    ...seed,
    id: utils.uuid(),
  });
  heroDeck.push(card);
});

export default heroDeck;


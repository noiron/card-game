import CardModel from "./model/card-model";
import * as utils from './utils';

const card0 = new CardModel({
  id: utils.uuid(),
  name: '攻击',
  desc: '🐓',
  attack: 10,
  armore: 0,
});

const card1 = new CardModel({
  id: utils.uuid(),
  name: '防御',
  desc: '🛡',
  attack: 0,
  armor: 1,
});

const card2 = new CardModel({
  id: utils.uuid(),
  name: '攻击',
  desc: '⚔',
  attack: 1,
  armor: 0,
});

const heroDeck = [card0, card1, card2];

export default heroDeck;


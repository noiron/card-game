import CardModel from "./model/card-model";

const card0 = new CardModel({
  name: '攻击',
  desc: '🐓',
  attack: 10,
  armore: 0,
});

const card1 = new CardModel({
  name: '防御',
  desc: '🛡',
  attack: 0,
  armor: 1,
});

const card2 = new CardModel({
  name: '攻击',
  desc: '⚔',
  attack: 1,
  armor: 0,
});

const heroDeck = [card0, card1, card2];

export default heroDeck;


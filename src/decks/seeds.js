// 定义一组 seed，作为卡牌的属性，以此来生成 cardModel 
const seed0 = {
  name: '攻击',
  desc: '🐓',
  attack: 10,
  armor: 0,
  positive: false,
};

const seed1 = {
  name: '防御',
  desc: '🛡',
  attack: 0,
  armor: 1,
  positive: true,
};

const seed2 = {
  name: '攻击',
  desc: '⚔',
  attack: 1,
  armor: 0,
  positive: false,
};

const seed3 = {
  name: '防御',
  desc: '🤺',
  attack: 0,
  armor: 5,
  positive: true,
}


export const heroSeeds = [seed0, seed1, seed2, seed3];
export const monsterSeeds = [seed0, seed1, seed1];

import { card_infos} from './infos';

interface ISeed {
  name: string;
  desc: string;
  attack: number;
  armor: number;
  positive: boolean;
  extraInfo: string;
}

// 定义一组 seed，作为卡牌的属性，以此来生成 cardModel 
const seedAttack1: ISeed = {
  name: '攻击',
  desc: '🐓',
  attack: 10,
  armor: 0,
  positive: false,
  extraInfo: card_infos.attack[0],
};

const seedAttack2: ISeed = {
  name: '攻击',
  desc: '⚔',
  attack: 1,
  armor: 0,
  positive: false,
  extraInfo: card_infos.attack[1],
};

const seedDefend1: ISeed = {
  name: '防御',
  desc: '🛡',
  attack: 0,
  armor: 1,
  positive: true,
  extraInfo: card_infos.defend[0],
};

const seedDefend2: ISeed = {
  name: '防御',
  desc: '🤺',
  attack: 0,
  armor: 5,
  positive: true,
  extraInfo: card_infos.defend[0],
};

interface IConfig {
  seed: ISeed;
  num: number;
}

const config: IConfig[] = [
  {
    seed: seedAttack1,
    num: 3,
  },
  {
    seed: seedAttack2,
    num: 3,
  },
  {
    seed: seedDefend1,
    num: 2,
  },
  {
    seed: seedDefend2,
    num: 2,
  },
]

// 一个配置对象，给定 seed 种类及数量，生成一个 seed 数组
function generateSeeds(config: IConfig[]) {
  const result: ISeed[] = [];

  config.forEach(s => {
    for (let i = 0; i < s.num; i++) {
      result.push(s.seed);
    }
  })

  return result;
}

const heroSeeds = generateSeeds(config);
const monsterSeeds = generateSeeds(config);

export default {
  heroSeeds,
  monsterSeeds,
};


// export const heroSeeds = [seed0, seed1, seed2, seed3];
// export const monsterSeeds = [seed0, seed1, seed1];

// 游戏规则：
// 双方各有十张牌，每次各发两张牌
// 如果双方手中都已无牌，则比较双方的生命值决定结果

// TODO: 加入回复生命的卡牌





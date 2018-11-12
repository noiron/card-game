import { observable } from 'mobx';

interface IHero {
  life: number;
  maxLife?: number;
  armor: number;
  mana?: number;
}


class Hero {
  @observable life: number;
  @observable armor: number;
  maxLife: number;
  mana: number;

  constructor(info: IHero) {
    this.life = info.life;
    this.maxLife = info.maxLife || 20;
    this.armor = info.armor;
    this.mana = info.mana || 5;
  }

  // 受到伤害
  receiveAttack(value: number) {
    if (this.armor >= value) {
      this.armor -= value;
    } else {
      this.life = this.life + this.armor - value;
      this.armor = 0;
    }
  }

  addArmor(value: number) {
    this.armor += value;
  }
}

export default Hero;

import { observable } from 'mobx';

class Hero {
  @observable life;
  @observable armor;

  constructor(info) {
    this.life = info.life;
    this.maxLife = info.maxLife || 20;
    this.armor = info.armor;
    this.mana = info.mana;
  }

  // 受到伤害
  receiveAttack(value) {
    if (this.armor >= value) {
      this.armor -= value;
    } else {
      this.life = this.life + this.armor - value;
      this.armor = 0;
    }
  }

  addArmor(value) {
    this.armor += value;
  }
}

export default Hero;

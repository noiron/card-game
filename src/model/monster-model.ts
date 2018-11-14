import { observable } from 'mobx';

interface IMonster {
  life: number;
  armor: number;
  mana?: number;
}

class Monster {
  @observable life: number;
  @observable armor: number;
  @observable mana: number;

  constructor(info: IMonster) {
    this.life = info.life;
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

  // 初始化这一回合的数据
  initThisTurn() {
    // TODO: 每回合回复法力值需要写入配置
    this.mana += 2;
  }

}

export default Monster;
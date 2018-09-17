class CardModel {
  constructor(info) {
    this.id = info.id;
    this.name = info.name;
    this.desc = info.desc;
    this.attack = info.attack;
    this.armor = info.armor;
    this.positive = info.positive;
    this.target = info.target;

    // 卡牌的来源和使用目标
    this.sourcePerson = null;
    this.targetPerson = null;
  }


}

export default CardModel;

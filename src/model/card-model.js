class CardModel {
  constructor(info) {
    this.id = info.id;
    this.name = info.name;
    this.desc = info.desc;
    this.attack = info.attack;
    this.armor = info.armor;
    this.positive = info.positive;
    this.target = info.target;
    this.source = info.source;
    this.extraInfo = info.extraInfo;
  }


}

export default CardModel;

class CardModel {
  id: string;
  name: string;
  desc: string;
  attack: number;
  armor: number;
  positive: boolean;
  target: string; // FIXME:
  source: string; // FIXME:
  extraInfo: string;
  playedTime: Date | null;


  constructor(info: any) {
    this.id = info.id;
    this.name = info.name;
    this.desc = info.desc;
    this.attack = info.attack;
    this.armor = info.armor;
    this.positive = info.positive;
    this.target = info.target;
    this.source = info.source;
    this.extraInfo = info.extraInfo;
    this.playedTime = null;
  }


}

export default CardModel;

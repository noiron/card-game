import { PlayerType } from 'src/constants';

class EffectModel {
  name: string;
  value: number;
  target: PlayerType;

  constructor(info: any) {
    this.name = info.name;
    this.value = info.value;
    this.target = info.target || 'enemy';
  }
}

export default EffectModel;

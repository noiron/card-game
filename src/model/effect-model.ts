class Effect {
  name: string;
  value: number;
  target: string;

  constructor(info: any) {
    this.name = info.name;
    this.value = info.value;
    this.target = info.target || 'enemy';
  }
}

export default Effect;

class Effect {
  constructor(info) {
    this.name = info.name;
    this.value = info.value;
    this.target = info.target || 'enemy';
  }
}

export default Effect;

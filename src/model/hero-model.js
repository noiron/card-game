class Hero {
  constructor(info) {
    this.life = info.life;
    this.maxLife = info.maxLife || 20;
    this.armor = info.armor;
    this.mana = info.mana;
  }
}

export default Hero;

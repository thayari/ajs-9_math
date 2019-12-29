/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

export default class Spellcaster {
  constructor() {
    this._attack = 100;
    this._distance = 1;
    this._stoned = false;
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    let currentAttack = this._attack * (1.1 - this.distance * 0.1);
    if (this.stoned) {
      currentAttack -= (Math.log2(this.distance) * 5);
    }
    return Math.round(currentAttack);
  }

  set distance(value) {
    if (Number.isInteger(value) && value > 0 && value < 10) {
      this._distance = value;
    } else {
      throw new Error('Distance should be an integer between 1 and 9');
    }
  }

  get distance() {
    return this._distance;
  }

  set stoned(value) {
    if (typeof value === 'boolean') {
      this._stoned = value;
    } else {
      throw new Error(`Stoned value is ${typeof value} instead of boolean`);
    }
  }

  get stoned() {
    return this._stoned;
  }
}

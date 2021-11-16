class Card {
  constructor(value) {
    this.value = value;
  }

  snap(otherCard) {
    return otherCard && this.value === otherCard.value;
  }

  toString() {
    return this.value.toString();
  }

  getValue() {
    return this.value;
  }
}

module.exports = {
  Card,
};

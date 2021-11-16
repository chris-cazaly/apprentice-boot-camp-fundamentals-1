class AnimalCard {
  constructor(animal) {
    this.animal = animal;
  }

  snap(otherCard) {
    // move snap() to snap.js (comapare card1.value == card2.value)
    return otherCard && this.animal === otherCard.animal;
  }

  toString() {
    return this.animal.toString();
  }

  getValue() {
    return this.animal;
  }
}

module.exports = {
  AnimalCard,
};

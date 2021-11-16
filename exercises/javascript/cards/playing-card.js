class PlayingCard {
  constructor(suit, faceValue) {
    this.suit = suit;
    this.faceValue = this.getFaceValue(faceValue);
  }

  getFaceValue(faceValue) {
    switch (faceValue) {
      case 1:
        return "ace";

      case 11:
        return "jack";

      case 12:
        return "queen";

      case 13:
        return "king";

      default:
        return faceValue;
    }
  }

  snap(otherCard) { // move snap() to snap.js (comapare card1.value == card2.value)
    return otherCard && this.faceValue === otherCard.faceValue;
  }

  getValue() {
    return this.faceValue;
  }

  toString() {
    return `${this.faceValue} of ${this.suit}`;
  }
}

module.exports = {
  PlayingCard,
};

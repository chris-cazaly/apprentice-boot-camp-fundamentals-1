const Suits = require("./suits.js").Suits;

class PlayingCard {
  constructor(suit, faceValue) { // always pass the key for Suits, not the dictionary itself
    this.suit = Suits[suit];
    this.faceValue = faceValue;
  }

  // getCard() {
  //     // di
  //     //makeCard()?
  // }
}

module.exports = { PlayingCard };

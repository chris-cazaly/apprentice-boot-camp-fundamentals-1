const Deck = require("./deck.js").Deck;

class MixedDeck extends Deck {
  constructor(deckOne, deckTwo) {
    super();
    this.cards = [...deckOne.cards, ...deckTwo.cards];
  }
}

module.exports = {
  MixedDeck,
};

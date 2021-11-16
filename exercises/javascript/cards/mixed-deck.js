const Deck = require("./deck.js").Deck;

class MixedDeck extends Deck {
  //   constructor(deckOne, deckTwo) {
  //     super();
  //     this.cards = [...deckOne.cards, ...deckTwo.cards];
  //   }

  constructor(...deck) {
    super();
    this.cards = cards;
    // this.cards = deck.reduce(function (deckOne, nextDeck) {
    // return deckOne.push(...nextDeck);
    // }, []);
  }
}
module.exports = {
  MixedDeck,
};

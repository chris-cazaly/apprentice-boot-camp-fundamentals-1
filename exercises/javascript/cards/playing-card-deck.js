// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.
const PlayingCard = require("./playing-card.js").PlayingCard;
const Deck = require("./deck.js").Deck;
const Suits = require("./suits").Suits;

class PlayingCardDeck extends Deck {
  constructor() {
    super();
    this.cards = this.setCards();
  }

  setCards() {
    var cards = [];

    for (var i = 0; i < Suits.length; i++) {
      for (var j = 1; j < 14; j++) {
        var card = new PlayingCard(Suits[i], j);
        cards.push(card);
      }
    }

    return cards;
  }
}

const cards = new PlayingCardDeck();
const deckInOrder = cards.getCards();

module.exports = {
  PlayingCardDeck,
};

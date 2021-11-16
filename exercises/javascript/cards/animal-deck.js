const animals = require("./animal.js").Animal;
const { AnimalCard } = require("./animal-card.js");
const Deck = require("./deck.js").Deck;

class AnimalDeck extends Deck {
  constructor() {
    super(); // to super
    for (const animal in animals) {
      this.cards.push(new AnimalCard(animal));
      this.cards.push(new AnimalCard(animal));
    }
  }

}

module.exports = {
  AnimalDeck,
};

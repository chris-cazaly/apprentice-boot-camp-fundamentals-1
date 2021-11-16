const { Card } = require("./card.js");
class AnimalCard extends Card {
  constructor(animal) {
    super(animal);
  }
}

module.exports = {
  AnimalCard,
};

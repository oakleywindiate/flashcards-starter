const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.index = deck.deck
  }
  returnCurrentCard() {
    return this.index[0]
  }
  takeTurn(guess) {
    let newTurn = new Turn(guess, this.index)
    this.turns++
    this.index.shift()
    newTurn.evaluateGuess() ? "correct" : this.incorrectGuesses.push(card.id)
  }
}

module.exports = Round;

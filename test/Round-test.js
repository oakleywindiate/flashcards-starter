const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Turn', () => {

  let round1;
  let round2;
  let deck1;
  let deck2;
  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let turn1;
  let turn2;
  let guess1;
  let guess2;

  beforeEach(() => {

    card1 = {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    };

    card2 = {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    };

    card3 = {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    };

    card4 = {
      "id": 4,
      "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "accessor method"
    };

    card5 = {
      "id": 5,
      "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "iteration method"
    };

    card6 = {
      "id": 6,
      "question": "What is an example of a mutator method?",
      "answers": ["sort()", "map()", "join()"],
      "correctAnswer": "sort()"
    };

    guess1 = "object";
    guess2 = "function";

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card4, card5, card6]);

    round1 = new Round(deck1);
    round2 = new Round(deck2);

    turn1 = new Turn(guess1, card1);
    turn2 = new Turn(guess2, card4);

  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of a Round', () => {
    expect(round1).to.be.an.instanceof(Round);
  });

  it('should be able to take in a deck', () => {
    expect(round1.deck).to.equal(deck1);
    expect(round2.deck).to.equal(deck2);
  })

  it('should be able to return the first card in the current deck', () => {
    expect(round1.deck.deck[0]).to.deep.equal(card1);
    expect(round2.deck.deck[0]).to.deep.equal(card4);
  })

  it('should be able to increase the turn by 1', () => {

    round1.takeTurn()

    expect(round1.turns).to.equal(1);

    round1.takeTurn()
    round1.takeTurn()

    expect(round1.turns).to.equal(3);
  })

  it('should be able to display the next card', () => {
    expect(round1.index[0]).to.deep.equal(card1);

    round1.takeTurn()

    expect(round1.index[0]).to.deep.equal(card2);
  })

});

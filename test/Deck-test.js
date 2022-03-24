const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;
  let deck1;
  let deck2;

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

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card4, card5, card6]);

  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(deck1).to.be.an.instanceof(Deck);
  });

  it('should hold an array of card objects', () => {
    expect(deck1.deck).to.deep.equal([card1, card2, card3]);
    expect(deck2.deck).to.deep.equal([card4, card5, card6]);
  })

});

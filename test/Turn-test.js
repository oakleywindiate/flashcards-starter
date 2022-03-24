const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', () => {

  let card1;
  let card2;
  let guess1;
  let guess2;
  let turn1;
  let turn2;

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

    guess1 = "object"
    guess2 = "function"

    turn1 = new Turn(guess1, card1);
    turn2 = new Turn(guess2, card2);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should be able to take two arguments: a guess and a card', () => {
    expect(turn1.guess).to.equal(guess1);
    expect(turn1.card).to.equal(card1);
  })

  it('should be able to return the users guess', () => {
    expect(turn1.returnGuess()).to.equal(guess1);
    expect(turn2.returnGuess()).to.equal(guess2);
  })

  it('should be able to return the card', () => {
    expect(turn1.returnCard()).to.equal(card1);
    expect(turn2.returnCard()).to.equal(card2);
  })

  it('should be able to evaluate the guess to true or false', () => {
    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  })

  it('should be able to evaluate if the guess is correct or incorrect', () => {
    expect(turn1.giveFeedback()).to.equal("correct");
    expect(turn2.giveFeedback()).to.equal("incorrect");
  })

});

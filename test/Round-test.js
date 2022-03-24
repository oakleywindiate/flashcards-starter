const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');

describe('Turn', () => {

  let round1;
  let round2;
  let deck1;
  let deck2;

  beforeEach(() => {

    deck1 = new Deck([card1, card2, card3]);
    deck2 = new Deck([card4, card5, card6]);

    round1 = new Round(deck1);
    round2 = new Round(deck2);

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

});

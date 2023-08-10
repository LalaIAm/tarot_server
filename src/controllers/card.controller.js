const { deck, shuffleDeck, findCardDefinition } = require('../helpers');

const newDeck = (req, res) => {
  let newDeck;

  newDeck = shuffleDeck(deck);
  newDeck = shuffleDeck(newDeck);
  newDeck = shuffleDeck(newDeck);

    res.status(201).json({deck: newDeck})
  
};

const shuffle = (req, res) => {
  let deck = req.body.deck;

  deck = shuffleDeck(deck);
  res.status(200).send({ deck: deck })
  
}

const getCardById = (req, res, next, id) => {
  console.log(id)
  const card = findCardDefinition(id);

  if (!card) {
    return res.status(402).send({message: 'no card found'})
  }
  req.card = card 
  next()
}

const read = (req, res) => {
  return res.json(req.card)
}

module.exports = { newDeck, shuffle, getCardById, read };

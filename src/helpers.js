const rawCards = require('./data/cards.json')

const createDeck = () => {
    let deck = [];

    for (let i = 0; i < rawCards.length; i++) {
        let card = rawCards[i]
        card.image = `https://gfx.tarot.com/site/decks/rider/full_size/${i}.jpg`;

        deck.push(card)
    }
    return deck;
}

let deck = createDeck()

const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i] 
        deck[i] = deck[j]
        deck[j] = temp
    }

    return deck;
}

const findCardDefinition = (id) => {
    const card = deck.filter((card) => card.id = id)
    return card;
}


module.exports = {deck, shuffleDeck, findCardDefinition}
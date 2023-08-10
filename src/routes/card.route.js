const express = require('express');
const cardController = require('../controllers/card.controller');

const router = express.Router();

router.route('/').get(cardController.newDeck).post(cardController.shuffle);

router.route('/:cardId').get(cardController.read)

router.param('cardId', cardController.getCardById)

module.exports = router;

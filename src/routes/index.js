const express = require('express')

const router = express.Router();

const cardRouter = require('./card.route')

router.use('/cards', cardRouter)

module.exports = router;
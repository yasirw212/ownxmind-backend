const express = require('express')

const productsRouter = express.Router()
const {getProducts} = require('../controller/index.js')

productsRouter.get('/', getProducts)

module.exports = productsRouter
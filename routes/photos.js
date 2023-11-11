const express = require('express')
const photosRouter = express.Router()

const {getPhotos, getPhotosById} = require('../controller/index.js')

photosRouter.get('/', getPhotos)
photosRouter.get('/:id', photosRouter)

module.exports = photosRouter
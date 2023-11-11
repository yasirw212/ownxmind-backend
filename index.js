const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const productsRouter = require('./routes/products.js')
const photosRouter = require("./routes/photos.js") 

const PORT = process.env.PORT || 4001
app.use(express.json())

app.use ('/products', productsRouter)
app.use ('/photos', photosRouter)

app.listen(PORT, () =>{
    console.log(`Listening on localhost:${PORT}...`)
})
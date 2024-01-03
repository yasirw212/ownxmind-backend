const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
const mongoStore = require('connect-mongo')
require('dotenv').config()

app.use(cors({
    origin: ["https://ownxmind.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))

const productsRouter = require('./routes/products.js')
const orderRouter = require("./routes/order.js")

const PORT = process.env.PORT || 4000
app.use(express.json())
app.set('trust proxy', 1)
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
    store: mongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        dbName: 'ownxmind'
    }),
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 100,
    }
}))

app.get('/', (req, res, next) => {
    return res.json({status: 'success', message: 'Session implemented'})
})

app.post('/cart')

app.use ('/products', productsRouter)
app.use ('/order', orderRouter)

app.listen(PORT, () =>{
    console.log(`Listening on localhost:${PORT}...`)
})
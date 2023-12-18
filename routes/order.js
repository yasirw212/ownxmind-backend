const express = require('express')
const orderRouter = express.Router()


orderRouter.post('/', (req, res, next) => {
    try {
        req.session.order = req.body
        return res.json({status: 'success'})
    } catch (error) {
        return res.json({status: 'failed', message: 'Unable to store order'})
    }
})

orderRouter.get('/', (req, res, next) => {
    if(!req.session.order){
        req.session.order = []
    }
    return res.json({status: 'success', order: req.session.order})
})

module.exports = orderRouter
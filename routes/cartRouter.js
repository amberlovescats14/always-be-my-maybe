const express = require('express')
const router = express.Router()
const cart = require('../data/cart')

router.get('/', (req,res)=> {
    return res.json(cart)
})



module.exports = router
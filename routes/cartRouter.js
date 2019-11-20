const express = require('express')
const router = express.Router()
const data = require('../data/cart')
const {cart } = data

router.get('/', async (req,res)=> {
    try {
        return res.json(cart)
    } catch (e) {
        console.log(`GET ERROR`, e)
    }
})

router.post('/', async (req,res) => {
      try {
          let item = req.body
          cart.push(item)
          return res.json(cart)
              
        } catch (err) {
            console.log(`POST ERROR`, err)
        }
})



module.exports = router
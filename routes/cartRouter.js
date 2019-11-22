const express = require('express')
const router = express.Router()
const data = require('../data/cart')
const {cart } = data

router.get('/', async (req,res)=> {
    try {
        return await res.json(cart)
    } catch (e) {
        console.log(`GET ERROR`, e)
    }
})

router.post('/', async (req,res) => {
      try {
          let item = req.body
          await cart.push(item)
          return res.json({
              msg: `POST CREATED`,
              content: cart
          })

        } catch (err) {
            console.log(`POST ERROR`, err)
        }
})

router.delete('/:id', async (req,res)=> {
      try {
        let id = req.params.id
        //! find it, return true or false
          let some = await cart.some(c => c.id == id)
          if(!some) return console.log("item not found")

          //! splice it
          let index
          let filter = cart.forEach((c,i)=> {
              if(id == c.id) index = i
          })
          await cart.splice(index,1)
          return res.json(cart)
        } catch (err) {
            console.log(`DELTE ERROR`, err)
        }
})



module.exports = router
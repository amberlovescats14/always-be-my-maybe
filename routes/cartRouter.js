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

// router.delete('/', async (req,res)=> {
//       try {
//           let id = req.body.id.toString()
//           let some = cart.some(c => c.id == req.body.id)
//           if(!some) return `Item not found`
//           let sliceID
//           let filter = cart.forEach((c,i)=> {
//               if(id == c.id) sliceID = i
//           })
//           cart.splice(sliceID,1)
//           return console.log(`Item Deleted`)
//         } catch (err) {
//             console.log(`DELTE ERROR`, err)
//         }
// })



module.exports = router
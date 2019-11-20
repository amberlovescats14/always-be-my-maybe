const express = require('express')
const path = require('path')
//! NPM RUN DEV
//! http://localhost:3001/index.html
//! CTL + C

const app = express()

app.use(express.json({extended: false}))

// app.get('/', (req,res)=> {
//   res.send(`API RUNNING`)
// })

app.use('/', express.static(path.join(__dirname, 'public')))

//!ROUTES
app.use('/api/cart', require('./routes/cartRouter'))





const port = process.env.PORT || 3001
app.listen(port, ()=> console.log(`Listening on port: ${port}`))
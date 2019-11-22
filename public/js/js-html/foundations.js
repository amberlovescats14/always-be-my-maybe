import $ from 'jquery'
import foundations from '../products/foundations'
// import cart from '../products/cart'
import {getItems, postItem } from '../api'

$(document).ready(function(){
  let idArr = []
  let cardWrapper = $('#cards-wrapper')
  const displayFoundations = () => {
    foundations.forEach((f,i)=> {
      idArr.push(f.id)
      let html =
          `<div class="col s12 m7 l2">
            <div class="card"><br>
            <div class="card-image card-img">
                <img src="https://blog.andersonhopkins.com/wp-content/uploads/2014/08/051614_GenericFoundation_Smear_FINAL.jpg">
            </div>
            <div class="card-content center-align">
                <p><h5>${f.color}</h5></p><br>
                <p>${f.description}</p>
                <p>${f.price}</p>
            </div>
            <div class="card-action center-align">
                <a class="waves-effect waves-light btn"
                id="foundation-${f.id}"><i class="material-icons small">
                    shopping_basket</i></a>

            </div>
        </div>
    </div>`
      cardWrapper.append(html)
    })
    addToCart(idArr)
  }

  const addToCart = arr => {
    arr.forEach(a => {
      $(`#foundation-${a}`).click(function () {
        console.log("clicked", a)
        findItem(a)
      })
    })
  }
  
  
  const findItem = (num) => {
    foundations.forEach((f,i)=> {
      if(f.id === num){
        console.log("found: ", f)
        // cart.push(f)
        postItem(f)
            .then((res)=> res.json())
            .then((data)=> console.log("DATA", data))
            .catch(()=> console.log(`POST ERROR`))
        // console.log("cart: ", cart)
        // return alert(`Foundation ${f.color} Added To Cart`)
      }
    })
  }
  
  displayFoundations()
  
  //! GET CART
  const getAmountInCart = () => {
    getItems()
        .then(data => console.log('CART DATA: ', data))
  }
  getAmountInCart()
  
})



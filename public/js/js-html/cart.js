import $ from 'jquery'
import { getItems } from '../api'

$(document).ready(function () {
    let cartID = []
   const requestCart = () => {
       getItems()
           .then(data =>{
               let wrapper = $('#card-wrapper')
               wrapper.html('')
               data.forEach((d,i)=> {
                   cartID.push(d.id)
                   let html =
                       `  <div class="col s12 m7">
<!--    <h2 class="header">Horizontal Card</h2>-->
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=60">
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <p class="center">${d.color}</p>
        <hr>
          <p class="center">${d.description}</p>
          <p class="center">${d.price}</p>
        </div>
<!--        <div class="card-action">-->
<!--          <a href="#">This is a link</a>-->
<!--        </div>-->
      </div>
    </div>
  </div>`
                   wrapper.append(html)
               })
               
           })
   }
   requestCart()
})
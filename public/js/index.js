import $ from 'jquery'
import lipsticks from './products/lipsticks'
import eyeshadows from './products/eyeshadow'
import foundations from './products/foundations'
console.log(eyeshadows)
$(document).ready(function () {
  let idBucket = []
  let wrapper = $('#shop-card-wrapper')
  for(let i=0; i < 2; i++){
    let eye = eyeshadows[i]
    let found = foundations[i]
    let lip = lipsticks[i]
    let eyeHTML =
        `  <div class="row scroll-item pink">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
<!--          <img src="../images/lipstick.jpeg">-->
          <span class="card-title">${eye.color}</span>
        </div>
        <div class="card-content">
          <p>${eye.description}</p>
        </div>
        <div class="card-action">
          <a href="#">BUTTON</a>
        </div>
      </div>
    </div>
  </div>`
    //! EYE
    let lipHTML =
        `  <div class="row scroll-item blue" >
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
<!--          <img src="../images/brushes.jpeg">-->
          <span class="card-title">${lip.color}</span>
        </div>
        <div class="card-content">
          <p>${lip.description}</p>
        </div>
        <div class="card-action">
          <a href="#">Button</a>
        </div>
      </div>
    </div>
  </div>`
    //! foundations
    let foundHTML =
        `  <div class="row scroll-item yellow" >
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
<!--          <img src="../images/brushes.jpeg">-->
          <span class="card-title">${found.color}</span>
        </div>
        <div class="card-content">
          <p>${found.description}</p>
        </div>
        <div class="card-action">
          <a href="#">Button</a>
        </div>
      </div>
    </div>
  </div>`
    wrapper.append(eyeHTML, lipHTML, foundHTML)
  }
})
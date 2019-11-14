$(document).ready(function(){
  $('.carousel').carousel()

  //! autoplay
  setInterval(function(){
    $('.carousel').carousel('next')
  }, 2000)

})
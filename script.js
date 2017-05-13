

$(document).ready(function() {
  console.log('ready!')
  var screen = document.getElementById('screen');
  var numberPixels = 51
  var pixelSize = 640 / numberPixels
  for (var i = 0; i < numberPixels; i++) {
    screen.innerHTML += '<div class="pixelsY"></div>'
  }
  var pixelsY = document.getElementsByClassName('pixelsY')
  for (var i =0; i < numberPixels; i++ ) {
      pixelsY[i].innerHTML += '<div class="pixelsX"></div>'
      for (var j =0; j < numberPixels; j++){
        pixelsY[j].innerHTML += '<div class="pixelsX"></div>'
      }
  }
  $('.pixelsY').width(pixelSize)
  $('.pixelsX').height(pixelSize)


  $('.pixelsX').hover(function() {
    $(this).addClass('black')
  })
})

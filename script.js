

$(document).ready(function() {
  console.log('ready!')
  var screen = document.getElementById('screen');
  for (var i = 0; i < 16; i++) {
    screen.innerHTML += '<div class="pixelsY"></div>'
  }
  var pixelsY = document.getElementsByClassName('pixelsY')

  for (var i =0; i < 16; i++ ) {
      pixelsY[i].innerHTML += '<div class="pixelsX"></div>'
      for (var j =0; j < 16; j++){
        pixelsY[j].innerHTML += '<div class="pixelsX"></div>'
      }
  }
})



$(document).ready(function() {
  //found shake function at stack overflow, couldn't get jQuery shake to work
  // http://stackoverflow.com/questions/21991062/jquery-effect-is-not-a-function/36446400
  function shake() {
    var div = document.getElementById('etch-a-sketch');
    var interval = 100;
    var distance = 10;
    var times = 4;

    $(div).css('position', 'relative');
    for (var iter = 0; iter < (times + 1) ; iter++) {
      $(div).animate({
        left: ((iter % 2 == 0 ? distance : distance * -1))
        }, interval);
      }                                                                                                          
      $(div).animate({ left: 0 }, interval);
    }

  function pixelGen(number){
    numberPixels = number
    pixelSize = 640 / numberPixels
      for (var i = 0; i < numberPixels; i++) {
    screen.innerHTML += '<div class="pixelsY"></div>'
  }
  var pixelsY = document.getElementsByClassName('pixelsY')
  for (var i = 0; i < numberPixels; i++ ) {
      for (var j =0; j < numberPixels; j++){
        pixelsY[j].innerHTML += '<div class="pixelsX"></div>'
      }
  }
  $('.pixelsY').width(pixelSize)
  $('.pixelsX').height(pixelSize)
  //makes stuff turn black
  $('.pixelsX').hover(function() {
    $(this).addClass('black')
  })
  }
  var screen = document.getElementById('screen');
  pixelGen(16)

  //PUSH DA BUTTON
  $('#shake').click(function(){
    shake();
    let userInput = prompt("Enter a number between 1-64")
    console.log(userInput)
    $(".pixelsY").remove();
    if (isNaN(userInput) || userInput < 1 || userInput > 64){
      alert("That is not an acceptable choice. Resetting to default")
      pixelGen(16)
    } 
    else {
    userInput = parseInt(userInput, 10);
    console.log(userInput)
    pixelGen(userInput);
    }
  });


  
})

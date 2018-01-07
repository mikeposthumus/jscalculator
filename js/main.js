var disp = [];
var newEquation = 1;
var counter = 0;

$(document).ready(function (){

function doIt () {
  return eval(disp.join(""));
}

function clear () {
  disp = [];
  newEquation = 1;
  counter = 0;
};

  $('.button').on('click', function () {
    if (newEquation == 1 && counter <= 12) {
      $('#text').empty();
      disp.push(this.value);
      $('#text').append((this.value));
      newEquation = 0;
      counter++;
    } else if (counter <= 12) {

    disp.push(this.value);
    $('#text').append((this.value));
    counter++
  }
  else {
    clear();
    $('#text').empty();
    $('#text').append("Too many digits!");
  };

  });

  $('.equals').on('click', function () {
    if (newEquation === 0) {
    $('#text').empty();
    var result = doIt().toPrecision(12);
    result = parseFloat(result);
    $('#text').append(result);
    clear();

  } else {
    $('#text').empty();
    $('#text').append("0")
    clear();
  };

  });

  $('.AC, .CE').on('click', function () {
    clear();
    $('#text').empty();
    $('#text').append("0");


  })

});

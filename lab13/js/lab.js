// index.js - Lab 13
// Author: Evelyn (Evie) Gill
// Date: 5/24/23

// Constants

// Functions
var oneLongString = "";

function fizzBuzzBoom(maxNums){

  for (i=1; i<=maxNums; i++) {

// //loop that lists the numbers and checks if they are fizz buzz boom through division
    if (i%105 == 0) {
      oneLongString += i + " - FizzBuzzBoom!<br>";
    }else if (i%35== 0) {
      oneLongString += i + " - BuzzBoom!<br>";
    }else if (i%21 == 0) {
      oneLongString += i + " - FizzBoom!<br>";
    }else if (i%15 == 0) {
      oneLongString += i + " - FizzBuzz!<br>";
    }else if (i%7 == 0) {
      oneLongString += i + " - Boom!<br>";
    }else if (i%5 == 0) {
      oneLongString += i + " - Buzz!<br>";
    }else if (i%3 == 0) {
      oneLongString += i + " - Fizz!<br>";
    } else {
      oneLongString += i + "<br>";
    }
  }

  var styledOutput = '<span style="color: pink;">' + oneLongString + '</span>';
  return styledOutput;

}


$("#button").click(function(){
  var max = $("#input").val();
  $("#output").append(fizzBuzzBoom(max));
});

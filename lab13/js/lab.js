// index.js - Lab 13
// Author: Evelyn (Evie) Gill
// Date: 5/24/23

// Constants

// Functions
// var max = $("#input").val();
// var oneLongString = "";

// function fillBuzzBoom(maxNums){
// //loop that lists the numbers and checks if they are fizz buzz boom through division
//  for (i=1; i <=200; i++) {
//   if (i%105 == 0) {
//     oneLongString += i + " - FizzBuzzBoom!<br>";
//     } else if (i%35 == 0) {
//       oneLongString += i + " - BuzzBoom!<br>";
//     } else if (i%21 == 0) {
//       oneLongString += i + " - FizzBoom!<br>";
//     } else if (i%15 == 0) {
//       oneLongString += i + " - FizzBuzz!<br>";
//     } else if (i%7 == 0) {
//       oneLongString += i + " - Boom!<br>";
//     } else if (i%5 == 0) {
//       oneLongString += i + " - Buzz!<br>";
//     } else if (i%3 == 0) {
//       oneLongString += i + " - Fizz!<br>"; 
//     } else {
//       oneLongString += i + "<br>";
//     }   
//  }
//  return oneLongString
// }

// $("#button").click(function(){
//   $("output").html(fizzBuzzBoom(max));
// });

var oneLongString = "";

function fizzBuzzBoom(){

  for (i=1; i<=200; i++) {

// loop that lists the numbers and checks if they are fizz buzz boom through division
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
  return oneLongString;

}


$("#output").append(fizzBuzzBoom());
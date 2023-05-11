// index.js - Lab 8
// Author: Evelyn (Evie) Gill
// Date: 5/10/23

// Constants

// Functions
//makes an ID for output
 var outputEl = document.getElementById("output");

 //creates new elements
 var new1El = document.createElement("p");
 var new2El = document.createElement("p");
 var new3El = document.createElement("p");

 //makes test for the elements
 new1El.innerHTML="Panguins are funny";
 new2El.innerHTML="Live, Laugh, Ahahahaha";
 new3El.innerHTML="Scooby Dooby Doo";

 //tells the elements to go to the HTML
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);
 outputEl.appendChild(new3El);
 outputEl.insertBefore(new3El, new1El);


 //changes the color of the text
 new1El.style.color="purple";
 new2El.style.color="red";

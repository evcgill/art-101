// index.js - Lab 10
// Author: Evelyn (Evie) Gill
// Date: 5/15/23

// Constants

// Functions
function sortUserName(str) {
    return str.split('').sort().join('');
}

var buttonEl = document.getElementById("my-button");

//Event Handler
buttonEl.addEventListener("click", function(){
    console.log("Button pressed");
//Gets Username as a value
    var username = document.getElementById("user-name").value;
//Calls sort function to  sort username
    var nameStr = sortUserName(username);
//output element
    var userEl = document.getElementById("output");
//create h1 element
    var new1El = document.createElement("h1");
//converts h1 element to nameStr
    new1El.innerHTML = nameStr;
    userEl.appendChild(new1El);
})
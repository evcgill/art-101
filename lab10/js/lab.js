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
    //var new1El = document.createElement("h1");
//converts h1 element to nameStr
    //new1El.innerHTML = nameStr;
    userEl.innerHTML = nameStr;
    userEl.style.color = "orange";
    userEl.style.fontSize = "40px";
})

//anagram
function isAnagram(str1, str2) {
    // Convert to lowercase and remove spaces/special characters
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Convert to arrays, sort, and join back into strings
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return str1 === str2;
  }
  var button2El = document.getElementById("anagram-button");

  button2El.addEventListener("click", function(){
    var word1 = prompt("What is the first word?");
    var word2 = prompt("What is the second word?");

    var anagram = isAnagram(word1, word2);

      var anaEl = document.getElementById("extra");
    //create new h1 element
      var new1El = document.createElement("h1");
      var new2El = document.createElement("h1");
      var new3El = document.createElement("h1");

      new1El.innerHTML = "Word 1: " + word1;
      new2El.innerHTML = "Word 2: " + word2;
      if(anagram == true){
          new3El.innerHTML = "Are they anagrams? YES!";
          new3El.style.color = "green";
      }else{
          new3El.innerHTML = "Are they anagrams? Nope!";
          new3El.style.color = "red";
      }
      anaEl.appendChild(new1El);
      anaEl.appendChild(new2El);
      anaEl.appendChild(new3El);
  });

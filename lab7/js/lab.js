// index.js - Lab 7
// Author: Evelyn (Evie) Gill
// Date: 5/2/23

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName() {
  var userName = window.prompt("Please enter your name.");
  console.log("userName =", userName)
  userName = userName.toLowerCase();
  userName.replace(/( )/g, "");

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

}

document.writeln("It is fixed: ",
sortUserName(), "</br>");
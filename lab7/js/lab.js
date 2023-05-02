// index.js - Lab 6
// Author: Evelyn (Evie) Gill
// Date: 5/1/23

// Constants
myTransport = ["Toyota RAV4", "Beach Bike"];

myMainRide = {
  make: "Toyota",
  model: "RAV4",
  color: "Blizzard Pearl",
  year: 2006,

  age : function(){
    return 2023 - this.year;
  }
}

document.writeln("How I Get To Places: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");


// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

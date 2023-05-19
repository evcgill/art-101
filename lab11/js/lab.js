// index.js - Lab 11
// Author: Evelyn (Evie) Gill
// Date: 5/18/23

// Constants

// Functions

$(".sectionbox").append("<button class='my-button'>Toggle Button</button>");

$(".my-button").click(function(){

  $(this).parent().toggleClass("special");
});
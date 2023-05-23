// index.js - Lab 12
// Author: Evelyn (Evie) Gill
// Date: 5/22/23

// Constants

// Functions

function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;
  if (mod == 0) {
    return "Gryffindor";}
    else if (mod == 1) {
    return "Ravenclaw";}
    else if (mod == 2) {
      return "Slytherin";}
    else if (mod == 3) {
      return "Hufflepuff";}


}

$("#button").click(function(){
  //retrieves the name
  var name = $("#input").val();
  console.log(name);
  //retrieves the house
  var house = sortingHat(name);
  console.log(house);
  //adds it all together
  $("#output").html("<h2>" + "Better be..." + house + "</h2>");
  if(house == "Gryffindor"){
    $("#house").append("<p class='Gryffindor'>You are strong and brave but kinda dumb");
  }else if(house == "Ravenclaw"){
    $("#house").append("<p class='Ravenclaw'>You are GINORMOUS Brain but need to touch grass you nerd");
  }else if(house == "Slythern"){
    $("#house").append("<p class='Slythern'>Bad guys, too smart for your own good, you baddie");
  }else if(house == "Hufflepuff"){
    $("#house").append("<p class='Hufflepuff'>Loyal cinnamonbuns");
  }
})
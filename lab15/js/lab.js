// index.js - Lab 15
// Author: Evelyn (Evie) Gill
// Date: 06/05/23

// Constants

// Functions
function returnStuff(){
    console.log("Clicked!");
    $.ajax({
        url: "https://yesno.wtf/api",
        type: "GET",
        data: {},

    })
        .done(function(data){
            var answer = data.answer;
            var imgUrl = data.image;
            $("#innerOutput").html("<h2>" + answer);
            $("#innerOutput").append("<img src= " + imgUrl + ">");

        })
}

$("#activate").click(returnStuff);

/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.11.8
 * License: Public Domain
 **/

 challengeElement = $("#lab11challenges");
 $("#lab11challenges").append("<button id='my-button1'>Press here");
 $("#my-button1").click(function(){
   $("#lab11challenges").css("background-color", "red");
   $("#lab11challenges").html("I changed my color!")
 })
 problemElement = $("#lab11problems");
 $("#lab11problems").append("<button id='my-button2'>Go Press here");
 $("#my-button2").click(function(){
   $("#lab11problems").css("background-color", "yellow");
   $("#lab11problems").html("I yell yellow!")
 })
 resultElement = $("#lab11results");
 $("#lab11results").append("<button id='my-button3'>Don't Press here");
 $("#my-button3").click(function(){
   $("#lab11results").css("background-color", "green");
   $("#lab11results").html("I become green!")
   $("#lab11results").css("margin","20px")
 })
 reloadElement = $("#reloading");
 $("#reloading").append("<button id='my-button4'>Press me to reload");
 $("#my-button4").click(function(){
    location.reload();
 })

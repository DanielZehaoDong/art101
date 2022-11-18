/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.11.17
 * License: Public Domain
 **/

 for(var i=1; i<201; i++){
   if (i%105==0){
     console.log("FizzBuzzBoom!")
   }
   else if(i%35==0){
     console.log("BuzzBoom!")
 }
   else if(i%21==0){
     console.log("FizzBoom!")
   }
   else if(i%15==0){
     console.log("FizzBuzz!")
   }
   else if(i%7==0){
     console.log("Boom!")
   }
   else if(i%5==0){
     console.log("Buzz!")
   }
   else if(i%3==0){
     console.log("Fizz!")
   }
   else{
     console.log(i)
   }
 }
oneLongString += i + " Fizz!<br>";
$("#output").html(oneLongString);

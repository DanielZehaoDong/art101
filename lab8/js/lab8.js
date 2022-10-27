/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.10.27
 * License: Public Domain
 **/

 function isOdd(x){
     return (x%2==1);
 }
 console.log("Odd or not?", isOdd(1));
 console.log("Odd or not?", isOdd(2));
 console.log("Odd or not?", isOdd(8237));

 array=[200,395,3615,100256,3,79]
 console.log("This is the array: ", array);

 var result = array.map(isOdd);
 console.log("Test of oddness for the array: ", array);

 var result = array.map(function(x){
     return x+30;
 })

 console.log("Sum of array and 30: ", result);

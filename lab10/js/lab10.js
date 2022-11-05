/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.11.3
 * License: Public Domain
 **/

 function sortName(input){
   //var userName = prompt('Please enter your name: ');
   input = String(input);
   var nameSplit = input.split('');
   console.log('namesplit: ', nameSplit);

   var nameSort = nameSplit.sort();
   console.log('namesort: ', nameSort);

   var nameJoin = nameSort.join('');
   console.log('namejoin: ', nameJoin);

   return nameJoin;
 }
//   document.writeln("Your name after fixed: ", sortName(), "</br>")
  //find the element
  var outputEl = document.getElementById("output");
  var buttonEl = document.getElementById('my-button');
  var inputEl = document.getElementById('input-name');
  //var buttonEl = document.createElement("my-button");
   // targetEl.appendChild(buttonEl);
   // buttonEl.style.fontSize = "30pt";
  // console.log("array is ", array);
  // buttonEl.addEventListener("click", sortName);
   buttonEl.addEventListener("click", function(){
     console.log("inputEl is "+ inputEl);
     entered = inputEl.value;
     result = sortName(entered);
     console.log("result " + result);
     outputEl.innerHTML = result;
   });


  // buttonEl.addEventListener("click", sortName());
    //prompt the user to imput ther name with the prompt() func.

    //use this input to change the text from 'Heelo, World!' to 'Hello' + the user's name
    //var nameEl = document.getElementById("name");
    //nameEl.innerHTML = name;
    //or we can do this in one step, like this:
    //document.getElementById("name").innerHTML = name;

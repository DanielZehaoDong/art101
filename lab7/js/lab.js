/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.10.25
 * License: Public Domain
 **/

 function sortName(){
   var userName = window.prompt('Please enter your name: ');
   console.log('name: ', userName);

   var nameSplit = userName.split('');
   console.log('namesplit: ', nameSplit);

   var nameSort = nameSplit.sort();
   console.log('namesort: ', nameSort);

   var nameJoin = nameSort.join('');
   console.log('namejoin: ', nameJoin);

   return nameJoin;

 }

document.writeln("Your name after fixed: ", sortName(), "</br>")

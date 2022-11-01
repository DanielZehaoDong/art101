/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.11.1
 * License: Public Domain
 **/

 document.getElementById("outputEl");
 var new1El = document.createElement("p");
  new1El.style.backgroundColor = "blue";
  new1El.style.fontSize = "30pt";
  new1El.style.padding = "30px";
  new1El.style.font = "italic bold 20px arial,serif";
  new1El.innerHTML = "I am the green box";
 var new2El = document.createElement("p");
  new2El.style.backgroundColor = "green";
  new2El.style.fontSize = "30pt";
  new2El.style.padding = "30px";
  new2El.style.font = "italic bold 20px arial,serif";
  new2El.innerHTML = "I am the blue box"
 document.body.appendChild(new1El);
 document.body.appendChild(new2El);
 var targetEl = document.getElementById("button");
 var buttonEl = document.createElement("button");
 targetEl.appendChild(buttonEl);
 buttonEl.innerHTML = "I am the button"

/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.11.22
 * License: Public Domain
 **/
 var buttonEl = document.getElementById('activate');
 //var buttonEl = document.createElement("my-button");
  // targetEl.appendChild(buttonEl);
  // buttonEl.style.fontSize = "30pt";
 // console.log("array is ", array);
 // buttonEl.addEventListener("click", sortName);
  buttonEl.addEventListener("click", function(){
    $.ajax({
    // The URL for the request (from the api docs)
    url: "https://pokeapi.co/api/v2/contest-effect/{id}/",
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            id: 1,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
  });

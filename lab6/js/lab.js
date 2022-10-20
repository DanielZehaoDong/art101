/**
 * Author:    Daniel Dong, Noctis Wang
 * Created:   2022.10.21
 * License: Public Domain
 **/

 myTransport = ["bus", "bicycle", "vehicle", "motorcycle"];

 var myMainRide = {
    make: "bmw",
    model: "328i",
    color: "white",
    year: 2013,
    age: function(){
        return 2022 - year;
    }
}

document.writeln("Kind of transportation I use: ", myTransport, "<br>")
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

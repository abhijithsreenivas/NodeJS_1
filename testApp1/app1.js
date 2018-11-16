const express = require('express');
const app = express();
const message = require('./module.js');
let all_letters = "   ";

console.log(message["letters"]);
app.get("/", function(request,response){
     for(let i=0;i<message["letters"].length;i++){
       all_letters+= message["letters"][i] + '<br/>';
     }

     response.send(all_letters);
});



app.listen(3000,function(error){
    if(error)
        console.log("Error Occurred.");
    else {
        console.log("Listening on localhost:3000");
    }
});

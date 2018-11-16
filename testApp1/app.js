const express = require('express');
const app = express();

app.get("/", function(request,response){
     response.send("<h1>Tested the GET Service</h2>");
});



app.listen(3000,function(error){
    if(error)
        console.log("Error Occurred.");
    else {
        console.log("Listening on localhost:3000");
    }
});

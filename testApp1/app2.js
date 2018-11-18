const express = require('express');
const app = express();


app.get("/users/:name",function(req,res){
        res.send(req["params"]["name"]);
});



app.listen(3000,function(error){
    if(error)
        console.log("Error Occurred.");
    else {
        console.log("Listening on localhost:3000");
    }
});

const express = require('express');
const app = express();
const fs = require('file-system');
const bodyParser = require('body-parser');

const _dirname = ".";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//app.use(express.static(_dirname + '/'));

app.get("/",function(req,res){
      fs.readFile(_dirname + "/index.html",function(err,data){
         if(!err){
           res.write(data);
         }
         res.end();
      });
});

/*
app.post("/status/new",function(req, res){
//  console.log(req["body"]["status"]);
//	console.log(req["body"]["name"]);

  let status = JSON.stringify({"name": req["body"]["name"], "status": req["body"]["statusArea"]})
   fs.writeFile(_dirname + "/status.json",status, function(err){
        console.log(err);
   });

});
*/
app.post("/status/new",function(req,res){


	fs.readFile(__dirname + '/status.json',null,function(err,data){
		if(!err){
			all_status = JSON.parse(data);
			new_status = {
				[req["body"]["name"]]:req["body"]["statusArea"]
			}
			all_status.push(new_status);

			fs.writeFile(__dirname + '/status.json',JSON.stringify(all_status),function(err){
				if(err){
					console.log(err);
				}
			})
		}
	})
})

app.get("/status",function(req,res){
   fs.readFile(_dirname + "/status.json", function(err, data){
      if(!err){
        res.send(JSON.parse(data));
      }
      else {
        console.log(err);
      }
   });
});

app.listen(3000,function(error){
    if(error)
        console.log("Error Occurred.");
    else {
        console.log("Listening on localhost:3000");
    }
});

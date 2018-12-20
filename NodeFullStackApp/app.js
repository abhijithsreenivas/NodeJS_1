const express =  require('express');
const app = express();
const bodyparser = require('body-parser');
const mongo = require('mongodb');
const mongoClient =  mongo.MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url="mongodb://127.0.0.1:27017/Samplesite";

app.use("/",express.static(__dirname + '/'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.post("/tasks/new",function(req,res){
//    console.log("Post is called. "+req.body.description);
    mongoClient.connect(url,function(err,database){
        console.log("Method called. :- This is description "+req.body.description);

        let db = database.db('Samplesite');
        let tasks = db.collection('todoapp');
        tasks.insertOne({
          timestamp : new Date(),
          description: req.body.description
        });
        return true;
    });
});

app.put("/tasks/update/:id",function(req,res){
//    console.log("Post is called. "+req.body.description);
    mongoClient.connect(url,function(err,database){
        console.log("Method called. :- This is description "+req.body.description);

        let db = database.db('Samplesite');
        let tasks = db.collection('todoapp');
        tasks.updateOne({
          _id : new ObjectId(req.params.id)},{
          $set: {description: req.body.description}
        });
        return true;
    });
});

app.delete("/tasks/delete/:id",function(req,res){
//    console.log("Post is called. "+req.body.description);
    mongoClient.connect(url,function(err,database){
        console.log("Method called. :- This Description gonna Delete "+req.body.description);

        let db = database.db('Samplesite');
        let tasks = db.collection('todoapp');
        tasks.deleteOne({
          _id : new ObjectId(req.params.id)
        });
        return true;
    });
});

app.get("/tasks",function(req,res){
    mongoClient.connect(url,function(err,database){
      if(!err){
        let db = database.db('Samplesite');
        let tasks =  db.collection('todoapp');

        tasks.find({}).toArray(function(err,result){
            res.send(JSON.stringify(result));
        });


      }
      else{
        console.log(err);
      }
    });
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});

app.listen(3000,function(err){
  if(!err){
    console.log("Listening in 3000");
  }
});

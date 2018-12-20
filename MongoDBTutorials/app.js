const mongo = require('mongodb');
const mongoClient =  mongo.MongoClient;

const url = 'mongodb://127.0.0.1:27017/Tutorials';

mongoClient.connect(url, function(err,database){
   if(err){
      console.log(error);
   }else{
     console.log('DB connected.')
     let db = database.db('Tutorials');
     let animals = db.collection('animals');
     animals.insertMany([{name:"Alaka",weight:"60kg"},{name:"Abhijith",weight:"90kg"}]);
     animals.find({}).toArray(function(err,result){
         console.log(JSON.stringify(result));
     });
   }
});

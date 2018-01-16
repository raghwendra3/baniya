//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//db.collection('Todos').findOneAndUpdate({
//_id: new ObjectID('5a5df44f3b3c9171f339345f')
//}, {
  //$set: {
    //completed: true
  //}
//}, {
  //returnoriginal: false
//}).then((result) => {
  //console.log(result);
//}

db.collection('Users').findOneAndUpdate({
_id: new ObjectID('5a5db12e4b75820b4c2c4b13')
}, {
  $set: {
    completed: 'Himanshu'
  }, 
    $inc: {
      age: 1
    }
}, {
  returnoriginal: false
}).then((result) => {
  console.log(result);
});

//db.close();
});

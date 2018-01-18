const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
  //console.log(result);
//});

//Todo.findOneIdAndRemove('5a607e2aef70a9ad1af1fb66').then((todo) => {
  //console.log(todo);
//});

Todo.findByIdAndRemove('5a607e2aef70a9ad1af1fb66').then((todo) => {
  console.log(todo);
});

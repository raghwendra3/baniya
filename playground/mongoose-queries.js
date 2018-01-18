const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

User.findById('5a5e6abf5993374c218db132').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
  

}, (e) => {
  console.log(e);
});

//var id = '5a6042caf080ac0c06669d38';


//if  (!ObjectID.isValid(id)) {
  //console.log('Id not valid');
//}

//Todo.find({
  //_id: id
//}).then((todos) => {
  //console.log('Todos', todo);
//});

//Todo.findOne({
  //_id: id
//}).then((todo) => {
  //console.log('Todo', todo);
//});

// Todo.findById(id).then((todo) => {
// if (!todo) {
//   return console.log('id not found');
// }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

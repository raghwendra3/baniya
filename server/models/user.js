const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlegth: 1,
    unique: true,
   validator: {
     validator: validator.isEmail,
     message: '{VALUE} is not a valid email'
   },
   pssword: {
     type: String,
     require: true,
     minlegth: 6
   },
   tokens: [{
     acess: {
       type: String,
       required: true
     }
   }]
});

module.exports = {User};

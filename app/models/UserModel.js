'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  name: String,
  uuid: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    _id: false,
    type: Array,
    required: true,
    lat: Number,
    lng: Number
  },
  ctime: Date,
  utime: Date
});


UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.ctime = Date.now();
  }
  this.utime = Date.now();
  return next();
});

UserSchema.pre('update', () => {
  console.log('Pre update mongo');
});


var Collection = mongoose.model('User', UserSchema);

const User = {
  create: (data, cb) => {
    let user = new Collection(data);
    user.save((err, user) => {
      return cb(err, user);
    });
  },
  findOne: (query, cb) => {
    Collection.findOne(query, (err, user) => {
      return cb(err, user);
    });
  },
  find: (query, cb) => {
    Collection.find(query, (err, users) => {
      return cb(err, users);
    });
  },
  update: (query, update, cb) => {
    Collection.where(query).update(update, (err, user) => {
      return cb(err, user);
    });
  }
};


module.exports = User;

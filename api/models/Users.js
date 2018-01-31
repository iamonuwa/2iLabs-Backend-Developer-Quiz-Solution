/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
let bcrypt = require("bcrypt");
let bluebird = require("bluebird");

module.exports = {

  attributes: {
  	email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
    	type: 'string',
    	required: true,
    	minLength: 6,
    	maxLength: 20,
    	protected: true,
    	required: true
    },
    firstname: {
    	type: 'string',
    	required: true,
    },
    lastname: {
    	type: 'string',
    	required: true
    },
    fullname: {
    	type: 'string',
    },
    avatar: {
        type: 'string'
    },
    toJSON: function () {
    	let obj = this.toObject();
    	delete obj.password;
        return obj;
    }
  },

	beforeCreate: (values, cb) => {
	        bcrypt.hash(values.password, 10, (err, hash) => {
	    	if (err) return cb(err);
	    	values.password = hash;
	      	cb();
    	});
    },

    comparePassword: (password, user) => {
        return new bluebird((resolve, reject) => {
	      bcrypt.compare(password, user.password, (err, match) => {
	        if (err) reject(err);

	        if (match) {
	          resolve(true);
	        } else {
	          reject(err);
	        }
	      })
	    });
    }
};


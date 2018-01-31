/**
 * Quiz.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	title: {
  		type: 'string',
  		unique: true,
      required: true
  	},
  	description: {
  		type: 'string',
  	},
  	author: {
  		model: 'Users'
  	},
    topic: {
      model: 'Topics',
      required: true
    },
  	type: {
  		type: 'string'
  	}
  }
};


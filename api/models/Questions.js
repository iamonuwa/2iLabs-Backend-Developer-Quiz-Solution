/**
 * Questions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	title: {
  		type: 'string',
  		required: true,
  	},
  	type: {
  		type: 'string',
  		required: true,
  	},
  	score: {
  		type: 'number'
  	},
  	time: {
  		type: 'number',
  	},
  	author: {
  		model: 'Users'
  	},
  	quiz: {
  		collection: 'Quiz',
  		via: 'question',
  	}
  }
};


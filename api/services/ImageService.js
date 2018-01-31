let sid = require('shortid');
let fs = require('fs');
let mkdirp = require('mkdirp');

let UPLOAD_PATH = 'public/images';

// Setup id generator
sid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
sid.seed(42);

module.exports = {
	safeFilename: (name) => {
	  return name.toString().toLowerCase()
	    .replace(/\s+/g, '-')
	    .replace(/[^\w\-]+/g, '')
	    .replace(/\-\-+/g, '-')
	    .replace(/^-+/, '')
	    .replace(/-+$/, '');
	},

	fileMinusExt: (fileName) => {
  		return fileName.split('.').slice(0, -1).join('.');
	},

	// Where you would do your processing, etc
	// Stubbed out for now
	processImage: (id, name, path, cb) => {
	  console.log('Processing image');

	  cb(null, {
	    'result': 'success',
	    'id': id,
	    'name': name,
	    'path': path
	  });
	}
}

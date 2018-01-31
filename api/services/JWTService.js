let jwt = require('jsonwebtoken');
let JWTSecret = process.env.JWT_TOKEN || 'normalsecrettokenforeveryapplication';

module.exports = {
	issue: (payload) => {
	    token = jwt.sign(payload, JWTSecret, {expiresIn: 180 * 60})
	    return token;
  	},

	verify: (token, callback) => {
	    return jwt.verify(token, JWTSecret, callback);
	},

	generate: (user) => {
		return this.issue({id: user});
	}
}
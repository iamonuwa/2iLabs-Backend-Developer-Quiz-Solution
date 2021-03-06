module.exports = (req, res, next) => {
	let token;
	console.log(`I crossed here ${req.headers.authorization}`);
	if (req.headers && req.headers.authorization) {
		let parts = req.headers.authorization.split(' ');
		if(parts.length == 2) {
			let scheme = parts[0];
			let credentials = parts[1];

			if(/^Bearer$/i.test(scheme)) {
				token = credentials;
			}
		} else {
			return res.forbidden('Format is Authorization: Bearer [token]');
		}
	} else if (req.param.token) {
		token = req.param.token;
		console.log(token)
		delete req.query.token;
	} else {
		return res.forbidden('Authorization header not found');
	}

	JWTService.verify(token, (err, decoded) => {
		if(err) return res.forbidden('Invalid token');
		req.token = token;

		UserService.singleUser(decoded.id, (err, foundUser) => {
			if(err) return res.forbidden(err);
			req.current_user = foundUser;
			next();
		});
	});
}
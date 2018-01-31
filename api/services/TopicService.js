module.exports = {

	listAll: (callback) => {
		Topics.find()
			.populateAll()
			.then((response) => {
				callback(null, response);
			}).catch((err) => {
				callback(err, null);
			})
	},

	listOne: (question, callback) => {
		Topics.findOne({
			id: question
		}).populateAll()
			.then((response) => {
				callback(null, response);
			}).catch((err) => {
				callback(err, null);
			})
	},

	create: (question, callback) => {
		Topics.create(question).then((response) => {
			callback(null, response);
		}).catch((err) => {
			callback(err, null);
		})
	},

	update: (question, callback) => {
		Topics.update({
			id: question.id
		}, question).then((response) => {
			callback(null, response);
		}).catch((err) => {
			callback(err, null);
		})
	},

	destroy: (question, callback) => {
		Topics.destroy({
			id: question
		}).then((response) => {
			callback(null, true);
		}).catch((err) => {
			callback(err, null);
		})
	}
}
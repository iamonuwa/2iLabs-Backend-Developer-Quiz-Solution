module.exports = {

	listAll: (callback) => {
		Questions.find()
			.populateAll()
			.then((response) => {
				callback(null, response);
			}).catch((err) => {
				callback(err, null);
			})
	},

	listOne: (question, callback) => {
		Questions.findOne({
			id: question
		}).populateAll()
			.then((response) => {
				callback(null, response);
			}).catch((err) => {
				callback(err, null);
			})
	},

	create: (question, callback) => {
		Questions.create(question).then((response) => {
			callback(null, response);
		}).catch((err) => {
			callback(err, null);
		})
	},

	update: (question, callback) => {
		Questions.update({
			id: question.id
		}, question).then((response) => {
			callback(null, response);
		}).catch((err) => {
			callback(err, null);
		})
	},

	destroy: (question, callback) => {
		Questions.destroy({
			id: question
		}).then((response) => {
			callback(null, true);
		}).catch((err) => {
			callback(err, null);
		})
	}
}
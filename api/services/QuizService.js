module.exports = {

	listAll: (callback) => {
		Quiz.find()
			.populateAll()
			.then((response) => {
				callback(null, response);
			}).catch((err) => {
				callback(err, null);
			})
	},

	listOne: (question, callback) => {
		Quiz.findOne({
			id: question
		}).populateAll()
			.then((response) => {
				callback(null, response);
			}).catch((err) => {
				callback(err, null);
			})
	},

	update: (question, callback) => {
		Quiz.update({
			id: question.id
		}, question).then((response) => {
			callback(null, response);
		}).catch((err) => {
			callback(err, null);
		})
	},

	destroy: (question, callback) => {
		Quiz.destroy({
			id: question
		}).then((response) => {
			callback(null, true);
		}).catch((err) => {
			callback(err, null);
		})
	}
}
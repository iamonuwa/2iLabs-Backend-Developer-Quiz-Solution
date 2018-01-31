/**
 * QuizController
 *
 * @description :: Server-side logic for managing quizzes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	index: (req, res) => {
		QuizService.listAll((err, foundQuiz) => {
			if(err) return res.notFound(err);
			if(foundQuiz.length > 0) {
				return res.ok(foundQuiz);
			} else {
				return res.notFound('No Quiz Found')
			}
		})
	},

	create: (req, res) => {
		let allowedParamters = [
			'title',
			'description',
			'question'
		];

		let data = _.pick(req.body, allowedParamters);
		data.author = req.current_user;
		QuizService.create(data, (err, createdQuiz) => {
			if(err) return res.badRequest(err);
			if (createdQuiz.hasOwnProperty('title')) {
				return res.created(createdQuiz);
			} else {
				return res.serverError('Internal Server Error');
			}
		})
	},

	update: (req, res) => {
		let allowedParamters = [
			'title',
			'description',
		];

		let data = _.pick(req.body, allowedParamters);
		data.author = req.current_user;
		data.id = req.param.id;
		QuizService.listOne(id, (err, foundQuiz) => {
			if(err) return res.notFound(err);
			if(foundQuiz.hasOwnProperty('title')) {
				QuizService.update(data, (err, updatedQuiz) => {
					if(err) return res.badRequest(err);
					if (updatedQuiz.hasOwnProperty('title')) {
						return res.created(updatedQuiz);
					} else {
						return res.serverError('Internal Server Error');
					}
				})
			}
		})
	},

	destroy: (req, res) => {
		let user = req.param('id');
        QuizService.listOne(user, (err, foundQuiz) => {
            if (err) return res.notFound('Question not found');
            if (foundQuiz.hasOwnProperty('title')) {
                QuizService.destroy(user, (err, quiz) => {
                    if(err) return res.serverError('Internal Server Error');
                    if(quiz) {
                        return res.ok('Quiz has been deleted successfully');
                    } else {
                        return res.badRequest('Failed to remove quiz. It seems like there is an issue with our system. We\'ll review it. Please try again later');
                    }
                })
            }
        })
	}
};


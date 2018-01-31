/**
 * QuestionsController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	index: (req, res) => {
		QuestionService.listAll((err, foundQuestions) => {
			if(err) return res.notFound(err);
			if(foundQuestions.length > 0) {
				return res.ok(foundQuestions);
			} else {
				return res.notFound('No Question(s) Found')
			}
		})
	},

	create: (req, res) => {
		let allowedParamters = [
			'title',
			'type',
			'time'
		];

		let data = _.pick(req.body, allowedParamters);
		data.author = req.current_user;
		QuestionService.create(data, (err, createdQuestion) => {
			if(err) return res.badRequest(err);
			if (createdQuestion.hasOwnProperty('title')) {
				return res.created(createdQuestion);
			} else {
				return res.serverError('Internal Server Error');
			}
		})
	},

	update: (req, res) => {
		let allowedParamters = [
			'title',
			'type',
			'time'
		];

		let data = _.pick(req.body, allowedParamters);
		data.author = req.current_user;
		data.id = req.param.id;
		QuestionService.listOne(id, (err, foundQuestion) => {
			if(err) return res.notFound(err);
			if(foundQuestion.hasOwnProperty('title')) {
				QuestionService.update(data, (err, createdQuestion) => {
					if(err) return res.badRequest(err);
					if (createdQuestion.hasOwnProperty('title')) {
						return res.created(createdQuestion);
					} else {
						return res.serverError('Internal Server Error');
					}
				})
			}
		})
	},

	destroy: (req, res) => {
		let user = req.param('id');
        QuestionService.listOne(user, (err, foundQuestion) => {
            if (err) return res.notFound('Question not found');
            if (foundQuestion.hasOwnProperty('email')) {
                QuestionService.destroy(user, (err, question) => {
                    if(err) return res.serverError('Internal Server Error');
                    if(question) {
                        return res.ok('Question has been deleted successfully');
                    } else {
                        return res.badRequest('Failed to remove question. It seems like there is an issue with our system. We\'ll review it. Please try again later');
                    }
                })
            }
        })
	}
};


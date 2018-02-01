/**
 * TopicsController
 *
 * @description :: Server-side logic for managing topics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	/**
     * Fetch all Topics
     * 
     * @description 
     * @param req
     * @returns res
     */
	index: (req, res) => {
		TopicService.listAll((err, foundTopics) => {
			if(err) return res.notFound(err);
			if(foundTopics.length > 0) {
				return res.ok(foundTopics);
			} else {
				return res.notFound('No Topic(s) Found')
			}
		})
	},

	/**
     * Create new topic
     * 
     * @description
     * @param req
     * @returns res
     */

	create: (req, res) => {
		let allowedParamters = [
			'title',
			'type'
		];
		let data = _.pick(req.body, allowedParamters);
		data.author = req.current_user;
		TopicService.create(data, (err, createdTopic) => {
			if(err) return res.badRequest(err);
			if (createdTopic.hasOwnProperty('title')) {
				return res.created(createdTopic);
			} else {
				return res.serverError('Internal Server Error');
			}
		})
	},
	/**
     * Update existing topic
     * 
     * @description 
     * @param req
     * @returns res
     */
	update: (req, res) => {
		let allowedParamters = [
			'title',
			'type'
		];
		let data = _.pick(req.body, allowedParamters);
		data.author = req.current_user;
		data.id = req.param.id;
		TopicService.listOne(id, (err, foundTopic) => {
			if(err) return res.notFound(err);
			if(foundTopic.hasOwnProperty('title')) {
				TopicService.update(data, (err, createdTopic) => {
					if(err) return res.badRequest(err);
					if (createdTopic.hasOwnProperty('title')) {
						return res.created(createdTopic);
					} else {
						return res.serverError('Internal Server Error');
					}
				})
			}
		})
	},

	/**
     * Remove a topic
     * 
     * @description 
     * @param req
     * @returns res
     */
	destroy: (req, res) => {
		let user = req.param('id');
        TopicService.listOne(user, (err, foundTopic) => {
            if (err) return res.notFound('Topic not found');
            if (foundTopic.hasOwnProperty('email')) {
                TopicService.destroy(user, (err, topic) => {
                    if(err) return res.serverError('Internal Server Error');
                    if(topic) {
                        return res.ok('Topic has been deleted successfully');
                    } else {
                        return res.badRequest('Failed to remove topic. It seems like there is an issue with our system. We\'ll review it. Please try again later');
                    }
                })
            }
        })
	}
};


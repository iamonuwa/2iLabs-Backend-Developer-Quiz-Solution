/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: (req, res) => {
        let allowedParameters = [
            'email',
            'password'
        ];

        let data = _.pick(req.body, allowedParameters);
        UserService.singleUserEmail(data.email, (err, foundUser) => {
            if(err) return res.notFound(err);
                if(foundUser) {
                    UserService.login(data, foundUser, (err, loginResponse) => {
                        if(err) return res.badRequest(err);
                        if (loginResponse.hasOwnProperty('user') && loginResponse.hasOwnProperty('token')) {
                            return res.ok(loginResponse, "Login Successful");
                        } else {
                            return res.serverError('Internal Server Error');
                        }
                    })        
                }
        })
    },
    
    /**
     * Fetch all Users
     * 
     * @description 
     * @param req
     * @returns res
     */

     index: (req, res) => {
        UserService.allUsers((err, foundUsers) => {
            if(err) {
            	return res.notFound(err);
            } else {
	            if (foundUsers.length > 0) {
	                return res.ok(foundUsers, 'Data retrieved successfully');
	            } else {
	            	return res.notFound('No User Found');
	            }
	        }
        })
     },

     find: (req, res) => {
     	let user = req.param('id');
        UserService.singleUser(user, (err, foundUser) => {
            if(err) {
            	return res.notFound(err);
            } else {
	            if (typeof foundUser != 'undefined' && foundUser.hasOwnProperty('email')) {
	                return res.ok(foundUser, 'Data retrieved successfully');
	            } else {
	            	return res.notFound('User not found');
	            }
	        }
        })
     },

    /**
     * Create new user
     * 
     * @description
     * @param req
     * @returns res
     */

     create: (req, res) => {
         let allowedParameters = [
             'firstname',
             'lastname',
             'password',
             'email'
         ];

        let data = _.pick(req.body, allowedParameters);
        data.fullname = `${ data.lastname } ${ data.firstname }`;
        UserService.createUser(data, (err, createdUser) => {
            if(err) {
                return res.badRequest(err);
            } else {
                if (createdUser.hasOwnProperty('email')) {
                    return res.ok(createdUser, "Account creation successful");
                } else {
                    return res.serverError('Internal Server Error');
                }
            }
        })
     },

     update: (req, res) => {
        let allowedParameters = [
             'firstname',
             'lastname',
             'email'
         ];
         let data = _.pick(req.body, allowedParameters);
         data.id = req.param('id');
         UserService.singleUser(data.id, (err, foundUser) => {
            if(err) return res.notFound('User not found');
            if(typeof foundUser != 'undefined' && foundUser.hasOwnProperty('email')) {
                data.fullname = `${ (data.lastname) ? data.lastname : foundUser.lastname } ${ (data.firstname) ? data.firstname : foundUser.firstname}`;
                UserService.updateUser(data, (err, updatedUser) => {
                    if(err) return res.badRequest(err);
                    if (updatedUser.hasOwnProperty('email')) {
                        return res.ok(updatedUser, 'Account update successful');
                    } else {
                        return res.serverError('Internal Server Error');
                    }
                })
            } else {
                return res.serverError('Unrecognized data format');
            }
         })
     },

     destroy: (req, res) => {
        let user = req.param('id');
        UserService.singleUser(user, (err, foundUser) => {
            if (err) return res.notFound('User not found');
            if (foundUser.hasOwnProperty('email')) {
                UserService.removeUser(user, (err, destroyedUser) => {
                    if(err) return res.serverError('Internal Server Error');
                    if(destroyedUser) {
                        return res.ok('Account has been deleted successfully');
                    } else {
                        return res.badRequest('Failed to remove user. It seems like there is an issue with our system. We\'ll review it. Please try again later');
                    }
                })
            }
        })
     },

     getUserFirstName: (req, res) => {

     },

     getUserLastName: (req, res) => {

     },

     getUserEmail: (req, res) => {

     },

     getUserFullName: (req, res) => {

     }
};


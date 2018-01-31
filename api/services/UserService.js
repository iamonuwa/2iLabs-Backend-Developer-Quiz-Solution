module.exports = {

    /**
     * Fetch all users
     */
    allUsers: (callback) => {
        Users.find()
            .populateAll()
            .then((response) => {
                callback(null, response);
            }).catch(err => {
                callback(err, null);
            })
    },

    /**
     * Fetch single user
     */
    singleUser: (user, callback) => {
        Users.findOne({
            id: user
            }).populateAll()
            .then((response) => {
                callback(null, response)
            }).catch((err) => {
                callback(err, null);
            })
    },

    singleUserEmail: (email, callback) => {
        Users.findOne({
            email: email
            }).populateAll()
            .then((response) => {
                callback(null, response)
            }).catch((err) => {
                callback(err, null);
            })
    },

    /**
     * Create new user
     */
    createUser: (data, callback) => {
        Users.create(data)
            .then((response) => {
                callback(null, response);
            }).catch((err) => {
                callback(err, null);
            })
    },

    /**
     * Update user details
     */
    updateUser: (data, callback) => {
        Users.update({
            id: data.id
        }, data).then((response) => {
            let result = response.reduce((users, user) => {
                if(user in users) {
                    users[user]++;
                } else {
                    users[user] = 1;
                }
                return users;
            });
            callback(result);
        }).catch((err) => {
            callback(err, null);
        })
    },

    /** 
     * Remove user
     */
    removeUser: (user, callback) => {
        Users.destroy({
            id: user
        }).then((response) => {
            callback(null, true);
        }).catch((err) => {
            callback(err, null);
        })
    },

    login: (data, user, callback) => {
        Users.comparePassword(data.password, user)
            .then((isValid) => {
                if(isValid) {
                    let response = {
                        user,
                        token: UserService.generateToken(user.id)
                    }
                    callback(null, response)
                } else {
                    callback('Login failed.', null);
                }
            }).catch((err) => {
                callback(err, null);
            })
    },

    generateToken: (user) => {
        return JWTService.issue({id: user});
    }
};
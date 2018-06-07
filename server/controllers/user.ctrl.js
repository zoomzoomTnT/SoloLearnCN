const User = require('./../models/User');
const UserSession = require('./../models/UserSession');
const mongoose = require('mongoose');

module.exports = {
    signup: (req, res, next) => {
        let { name, email } = req.body;
        if (!name || !email) {
            return res.send({
                success: false,
                message: 'Error: Name and Email can\'t be blank'
            });
        }

        User.find({
            email: email

        }, (err, returnUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (returnUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Returned User no need to sign up'
                });
            }

            //save new user
            const newUser = new User();
            newUser.email = email;
            newUser.name = name;
            newUser.save((err,user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            });
        });


    },

    signin: (req, res, next) => {
        const { body } = req;
        const { name, email } = body;
        if (!name || !email) {
            return res.send({
                success: false,
                message: 'Error: cant be blank'
            });
        }

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (users.length !== 1) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            const user = users[0];
            newUserSession = new UserSession();
            newUserSession.userId = user._id;
            newUserSession.save((err,user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed in',
                    token: user._id
                });
            });


        });


    },

    verify: (req, res, next) => {
        let { token } = req.query; //?token=test

        UserSession.find ({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            console.log(sessions);
            if (err) {
                return res.send({success: false, message: 'Error: Server Error'});
            } else if (sessions.length !== 1) {
                return res.send({success: false, message: 'Error: Invalid'});
            } else {
                return res.send({success: true, message: 'Error: Good'});
            }
            }
        );
    },

    logout: (req, res, next) => {
        let { token } = req.query; //?token=test

        UserSession.findOneAndUpdate ({
                _id: token,
                isDeleted: false
            }, {
                $set:{isDeleted:true}
            }, null, (err, sessions) => {
                console.log(sessions);
                if (err) {
                    return res.send({success: false, message: 'Error: Server Error'});
                }
                    return res.send({success: true, message: 'Error: Good'});

            }
        );
    }
};
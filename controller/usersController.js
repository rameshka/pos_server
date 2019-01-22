const secret = process.env.JWT_SECRET;
const User = require('../model/user');
const jwt = require('jsonwebtoken');


module.exports = {
    addUser: (req, res) => {

        let name = req.body.username;
        let password = req.body.password;
        const user = new User({name, password}); // document = instance of a model
        // TODO: We can hash the password here as well before we insert
        user.save((err, user) => {
            if (!err) {
                console.log("success save");
                result.status = status;
                result.result = user;
            } else {
                status = 500;
                result.status = status;
                result.error = err;
            }
            console.log('last ' + 'err');
            res.status(status).send(result);
        });


    },
    authenticateUser: (req, res) => {
        User.findOne({name: req.body.username}, function (err, user) {
            if (err) throw err;
            if (!user) {
                res.json({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {
                // check if password matches
                if (user.password != req.body.password) {
                    res.json({success: false, message: 'Authentication failed. Wrong password.'});
                } else {
                    // if user is found and password is right
                    // create a token with only our given payload
                    // we don't want to pass in the entire user since that has the password
                    const payload = {admin: user.username};
                    var token = jwt.sign(payload, secret, {expiresIn: 60 * 5});

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }
            }

        });

    },

};
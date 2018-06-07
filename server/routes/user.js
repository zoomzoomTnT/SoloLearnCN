// server/routes/user.js
const usercontroller = require('./../controllers/user.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();
module.exports = (router) => {
    /*
    * Sign up
    * */
    router
        .route('/signup')
        .post(usercontroller.signup);

    router
        .route('/signin')
        .post(usercontroller.signin);

    router
        .route('/verify')
        .get(usercontroller.verify);

    router
        .route('/logout')
        .get(usercontroller.logout);
};
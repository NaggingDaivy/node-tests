var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if email already exists
    // save the user to the database
    db.saveUser({
        // email: email, // ES5
        // password: password //ES5
        email, // ES6
        password //ES6
    });
    // send the welcome mail
};
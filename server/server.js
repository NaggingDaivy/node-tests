const express = require('express');


var app = express();

app.get('/', (req, res) => {

    res.status(404).send({
        error: 'Page not found',
        name: 'TOdo App v1.0'
    });

});

app.get('/users', (req, res) => {
    var users = [{
        name: 'Daivy',
        age: 25
    }, {
        name: 'Marion',
        age: 16
    }, {
        name: 'Edouard',
        age: 25
    }];

    res.send(users);
})

app.listen(3000, () => {
    console.log('Server started at port 3000');
})

module.exports.app = app;
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__.

describe('App', () => {

    
    // it('should call the spy correctly', () => {
    //     var spy = expect.createSpy();
    //     spy('Daivy',25);
    //     // expect(spy).toHaveBeenCalled();
    //     expect(spy).toHaveBeenCalledWith('Daivy',25);

    // });

    var db = {
        saveUser: expect.createSpy()
    }

    app.__set__('db',db); // calling spy, not real function db.js. Le but est de tester le simple appel à la fonction, pas de la vérifier

    it('should call saveUser with user object', () => {
        var  email = "daivy.merlijs@vivaldi.net";
        var password = '123abc';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});
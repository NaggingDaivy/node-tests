const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

    describe('GET /', () => {
        it('should retourn hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should check that Daivy exist in users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Daivy',
                        age: 25
                    })
                })
                .end(done);
        });
    })
});
const expect = require('expect');

const utils = require('./utils'); 

describe('Utils', () => {

    describe('#add', () => {

        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            // if(res != 44) {
            //     throw new Error(`Expected 44, but got ${res}`); // will fail the test
            // }
            expect(res).toBe(44).toBeA('number'); // Toujours utiliser une assert library
        });

    });

    describe('#addAsync', () => {
        /**
         * 
         * 
         * ASYNC: il faut utiliser 'done' pour dire à mocha qu'on va faire un test async
         * 
         * 
         * 
         */
        it('should async add two numbers', (done) => {

            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done(); // for finish async
            })
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(4);
            // if(res != 16)
            //     throw new Error(`Expected 16, but got ${res}`);
            expect(res).toBe(16).toBeA('number');
        });
    })

    describe('#asyncSquare', () => {
        it('should async square a number', (done) => {
            utils.asyncSquare(4, (res) => {
                expect(res).toBe(16).toBeA('number');
                done();

            })
        });
    });

    describe('#setName', () => {
        it('should verify first and last names are set', () => {

            var user = {
                location: 'Saint-Nicolas',
                age: 25
            };
            var res = utils.setName(user, 'Daivy Merlijs');

            expect(res).toInclude({
                firstName: 'Daivy',
                lastName: 'Merlijs'
            })
        });
    });
});

// it('should expect some values', () => {

//     //expect(12).toNotBe(12);
//     //expect({name: 'Daivy'}).toBe({name: 'Daivy'}); // will not work on objects and array beacause using === which yields true when they refer to the same location in memory
//     //expect({name: 'Daivy'}).toEqual({name: 'Daivy'}); // will work on obj and arr because using isEqual, which do not look in memory but on object egality.
//     // expect([2,3,4]).toInclude(2);
//     //expect([2,3,4]).toExclude(1);
//     expect({
//         name:'Daivy',
//         age:'25',
//         location: 'Philadelphia'
//     }).toInclude({
//         age:'24'
//     });
// });
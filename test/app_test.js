const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('Test first get request', () => {
    it('handles a get request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, respone) => {
                assert(respone.body.key === 'value');
                done();
            })
    })
})



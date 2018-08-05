const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost:27017/mover_test', { useNewUrlParser: true });
    mongoose.connection
        .once('open', () => done())
        .on('error', err => {
            console.warn('Warning: ', error)
        });
});

beforeEach(done => {
    const { drivers } = mongoose.connection.collections;
    drivers.drop()
        .then((sucess) => done())
        .catch(() => done())

})
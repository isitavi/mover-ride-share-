const Driver = require('../models/driver');

module.exports = {
    greeting(req, res) {
        res.send({ key: 'value' });
    },


    create(req, res, next) {
        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver => res.send(driver))
            .catch(next)

    },


    edit(req, res, next) {
        const driverID = req.params.id;
        const driverUpdateInfo = req.body;

        Driver.findByIdAndUpdate({ _id: driverID }, driverUpdateInfo)
            .then(() => Driver.findById({ _id: driverID }))
            .then(driver => res.send(driver))
            .catch(next);
    },


    delete(req, res, next) {
        const driverID = req.params.id;

        Driver.findByIdAndRemove({ _id: driverID })
            .then((driverinfo) => res.status(404).send(driverinfo))
            .catch(next);

    }
};
// Gustavo Olgiati

const db = require('../config/db.manager');

exports.getUserData = function (req, res) {
    const userData = db.getUserData().then(results => {
        console.log(results);
        res.status(200).json({
            status: 'succesfull',
            data: results.recordsets[0]
        }); // send all the data
    });
}

exports.getUserDataByID = function (req, res) {
    const {id} = req.params; // get id
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.createNewUser = function(req, res) { // must select the body to be raw-json in postman
    const {body} = req; // req.body (attribute)
    const {id} = req.params; // get (attribute)
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.patchUserDataByID = function(req, res) { // must select the body to be raw-json in postman
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

exports.deleteUserDataByID = function(req, res) { // must select the body to be raw-json in postman
    const {body} = req;
    const {id} = req.params;
    res.status(200).json({
        status: 'no implemented'
    });
}

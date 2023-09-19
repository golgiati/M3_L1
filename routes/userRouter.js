// Gustavo Olgiati

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router
    .route('/')
    .get(userController.getUserData)
    .post(userController.createNewUser);

router
    .route('/:id')
    .get(userController.getUserDataByID)
    .patch(userController.patchUserDataByID)
    .delete(userController.deleteUserDataByID);

module.exports = router;
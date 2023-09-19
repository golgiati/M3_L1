// Gustavo Olgiati

const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router
    .route('/')
    .get(salesController.getAllSales)
    .post(salesController.createNewSales);

router
    .route('/:id')
    .get(salesController.getSalesByID)
    .patch(salesController.patchSalesByID)
    .delete(salesController.deleteSalesByID);

module.exports = router;
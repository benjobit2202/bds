const express = require('express');
const router = express.Router();
const contactController = require('./controller.js')

/**
 * Description: method create contact
 * Created: DVBen(27/03/2023)
*/
router.post('/contacts', (req,res,next) => {
    return contactController.createContact(req,res)
})

/**
 * Description: method get list contact
 * Created: DVBen(27/03/2023)
*/
router.get('/contacts', (req,res,next) => {
    return contactController.getListContact(req,res)
})

/**
 * Description: method get detail contact
 * Created: DVBen(27/03/2023)
*/
router.get('/contacts/:id', (req,res,next) => {
    return contactController.getDetailContact(req,res)
})

module.exports = router
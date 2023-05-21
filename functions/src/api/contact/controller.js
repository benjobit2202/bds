// const { config } = require('dotenv');
const helpers = require('../../../helpers/common')
const config = require('../../config/config.js')
const db = require('../../config/dbConfig.js')
require('dotenv').config();

/** 
 * 
*/
const createContact = async (req, res) => {
  try {
    const result = await db.db.Contact.create(req.body)

    if (result) {
      helpers.response(res, result, config.httpStatus.success, req.__('contact.create.success'))
    } else {
      helpers.response(res, result, config.httpStatus.badRequest, req.__('contact.create.failed'))
    }
  } catch (error) {
    helpers.response(res, error, config.httpStatus.success, req.__('system.error'))
  }
}

/** 
 * 
*/
const getListContact = async (req, res) => {

  try {
    const result = await db.db.Contact.findAll({ raw: true })

    if (result && result.length) {
      helpers.response(res, result, config.httpStatus.success, req.__('contact.find.success'))
    } else {
      helpers.response(res, result, config.httpStatus.badRequest, req.__('contact.find.failed'))
    }
  } catch (error) {
    helpers.response(res, error, config.httpStatus.success, req.__('system.error'))
  }
}

/** 
 * 
*/
const getDetailContact = async (req, res) => {
  try {
    const id = req.params["id"]

    const result = await db.db.Contact.findOne({ where: { id: id }, raw: true })

    if (result) {
      helpers.response(res, result, config.httpStatus.success, req.__('contact.find.success'))
    } else {
      helpers.response(res, result, config.httpStatus.badRequest, req.__('contact.find.failed'))
    }
  } catch (error) {
    helpers.response(res, error, config.httpStatus.success, req.__('system.error'))
  }
}

module.exports = {
  createContact,
  getListContact,
  getDetailContact
}
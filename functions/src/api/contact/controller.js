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
    const data = await db.db.Contact.create(req.body)

    let result = data.dataValues

    if (result) {
      result.created_at = result.createdAt
      result.updated_at = result.updatedAt

      helpers.response(res, result, config.httpStatus.success, req.__('contact.create.success'))
    } else {
      helpers.response(res, result, config.httpStatus.badRequest, req.__('contact.create.failed'))
    }
  } catch (error) {
    helpers.response(res, error, config.httpStatus.badRequest, req.__('system.error'))
  }
}

/** 
 * 
*/
const getListContact = async (req, res) => {

  try {
    const data = await db.db.Contact.findAll({ raw: true })

    if (data && data.length) {
      let result = []
      for (let item of data) {
        item.created_at = item.createdAt
        item.updated_at = item.updatedAt

        result.push(item)
      }

      helpers.response(res, result, config.httpStatus.success, req.__('contact.find.success'))
    } else {
      helpers.response(res, result, config.httpStatus.badRequest, req.__('contact.find.failed'))
    }
  } catch (error) {
    helpers.response(res, error, config.httpStatus.badRequest, req.__('system.error'))
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
      result.created_at = result.createdAt
      result.updated_at = result.updatedAt

      helpers.response(res, result, config.httpStatus.success, req.__('contact.find.success'))
    } else {
      helpers.response(res, result, config.httpStatus.badRequest, req.__('contact.find.failed'))
    }
  } catch (error) {
    helpers.response(res, error, config.httpStatus.badRequest, req.__('system.error'))
  }
}

module.exports = {
  createContact,
  getListContact,
  getDetailContact
}
'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addCustomer = function addCustomer (req, res, next) {
  var customer = req.swagger.params['customer'].value;
  Default.addCustomer(customer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customerGET = function customerGET (req, res, next) {
  var custId = req.swagger.params['custId'].value;
  Default.customerGET(custId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.customersGET = function customersGET (req, res, next) {
  Default.customersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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

module.exports.getCustomer = function getCustomer (req, res, next) {
  var custId = req.swagger.params['custId'].value;
  Default.getCustomer(custId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomers = function getCustomers (req, res, next) {
  Default.getCustomers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

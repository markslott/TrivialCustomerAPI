'use strict';


/**
 * adds a customer record
 * Adds a customer record
 *
 * customer Customer Customer to add (optional)
 * no response value expected for this operation
 **/
exports.addCustomer = function(customer) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * custId String customerId
 * returns Object
 **/
exports.getCustomer = function(custId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns Object
 **/
exports.getCustomers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


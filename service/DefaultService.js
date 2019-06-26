'use strict';

var customers = [
  {
    "id" : "1",
    "city" : "Montgomery",
    "country" : "USA",
    "postal" : "19009",
    "state" : "PA",
    "street" : "2725 Quarry Rd",
    "firstName" : "Bob",
    "lastName" : "Hodges",
    "email" : "bhodges@example.com",
    "phone" : "(422) 555-5262"
  }
]

/**
 * adds a customer record
 * Adds a customer record
 *
 * customer Customer Customer to add (optional)
 * no response value expected for this operation
 **/
exports.addCustomer = function(customer) {
  return new Promise(function(resolve, reject) {
    customers.push(customer);
    console.log(customers);
    resolve();
  });
}


/**
 *
 * custId String customerId
 * returns Object
 **/
exports.customerGET = function(custId) {
  return new Promise(function(resolve, reject) {
    var c = {};
    customers.forEach(function(customer) {
      console.log("customer.id = " + customer.id + " and custId = " + custId);
      if (customer.id == custId) {
        c = customer;
      }
    })
    var examples = {};
    examples['application/json'] = c;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * returns List
 **/
exports.customersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = customers;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


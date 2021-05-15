"use strict";
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
var util = require("util");
const jsf = require("json-schema-faker");
const chance = require("chance");
const faker = require("faker");
jsf.extend("chance", () => new chance.Chance());
jsf.extend("faker", () => faker);
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */

module.exports = {
  events: getEvents,
  event: getEvent,
};

var EventsSchema = {
  type: "array",
  minItems: 6,
  maxItems: 12,
  items: {
    type: "object",
    required: ["id", "image", "name", "address", "organizer"],
    properties: {
      id: {
        type: "number",
        faker: "random.number",
      },
      image: {
        type: "string",
        faker: "image.image",
      },
      name: {
        type: "string",
        faker: "company.companyName",
      },
      address: {
        type: "string",
        faker: "address.streetAddress",
      },
      organizer: {
        type: "string",
        faker: "name.findName",
      },
    },
  },
};
/*
  Functions in a127 controllers used for operations should take two parameters:
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getEvents(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // this sends back a JSON response which is a single string
  jsf.resolve(EventsSchema).then((sample) => res.json(sample));
}
function getEvent(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  // this sends back a JSON response which is a single string
  var event = req.swagger.params.event.value || "Squash Starter";

  res.json([
    {
      id: faker.random.number(),
      image: faker.image.image(),
      name: event,
      address: faker.address.streetAddress(),
      sport: faker.lorem.word(),
      organizer: faker.name.findName(),
      price: faker.random.number(),
      seats: faker.random.number(),
    },
  ]);
}

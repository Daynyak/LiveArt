"use strict";

var SwaggerExpress = require("swagger-express-mw"); //создаем объект
var app = require("express")();
module.exports = app; // for testing

var config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/museums"]) {
    console.log(
      "try this:\ncurl http://127.0.0.1:" + port + "/api/v1/museums"
    );
  }
  if (swaggerExpress.runner.swagger.paths["/events"]) {
    console.log("try this:\ncurl http://127.0.0.1:" + port + "/api/v1/events");
  }
});

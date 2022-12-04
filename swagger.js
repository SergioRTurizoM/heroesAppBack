const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Superhéroes Marvel",
      version: "1.0.0",
      description:
        "API que sirve para usar app de héroes Marvel. Por Sergio Raúl Turizo",
    },
  },
  apis: [
    "./src/routes/user.routes.js",
    "./src/routes/heroes.routes.js",
    "./src/models/users.models.js",
    "./src/models/hero.models.js",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `Documentación disponible en http://${process.env.HOST}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;



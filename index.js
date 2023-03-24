const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use(cors());

let perkenalan = {
  nama: "Angga Saeful",
  message: "Halo, nama saya Angga Saeful",
};

app.get("/", (req, res) => {
  res.json(perkenalan);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () =>
  console.log(`Hello world app listening on port http://localhost:${port}`)
);

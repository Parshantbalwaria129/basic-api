const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
require("body-parser");
require("./db");
app.use(cors());
app.use(express.json());

const { notesRouter } = require("./api/v1/index");

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Node backend app runing on port http://localhost:${port}`);
});

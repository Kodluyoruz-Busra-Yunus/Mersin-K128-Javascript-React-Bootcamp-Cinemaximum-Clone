"use strict";

const express = require("express");
const pg_promise = require("pg-promise");
const dotenv = require("dotenv").config();
const moviesRouter = require("./routes/movie");
const ticketsRouter = require("./routes/ticket");
const app = express();
const pgp = pg_promise();
const port = 3000;

app.use(express.json());
app.use("/movies", moviesRouter);
app.use("/tickets", ticketsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

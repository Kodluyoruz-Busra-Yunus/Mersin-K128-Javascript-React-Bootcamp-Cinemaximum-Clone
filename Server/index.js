"use strict";

const express = require("express");
const pg_promise = require("pg-promise");
const dotenv = require("dotenv").config();
const app = express();
const pgp = pg_promise();
const port = 3000;

var db = pgp({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
// GET ALL MOVIES
app.get("/", async (req, res) => {
  db.query("SELECT * FROM movie")
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
});
// GET A MOVIE
app.get("/:title", async (req, res) => {
  const { title } = req.params;
  db.query("SELECT * FROM movie WHERE title = $1", [title])
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

//POST MOVIE
app.post("/", async (req, res) => {
  console.log(req.body);
  db.one(
    "INSERT INTO movie (title, genre) VALUES($1, $2) RETURNING id",
    [req.body.title, req.body.genre],
    (event) => event.id
  ).then((data) => {
    res.send(data);
  });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

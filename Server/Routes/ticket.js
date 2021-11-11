"use strict";

const express = require("express");
const pg_promise = require("pg-promise");
const dotenv = require("dotenv").config();
const router = express.Router();
const pgp = pg_promise();

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

router
  .route("/")
  .all((req, res, next) => {
    console.log("Request detected");
    next();
  })
  .get((req, res) => {
    db.query("SELECT * FROM ticket")
      .then(function (data) {
        res.send(data);
        console.log(data);
      })
      .catch(function (error) {
        res.send(error);
      });
  })
  .post((req, res) => {
    console.log(req.body);
    db.one(
      "INSERT INTO ticket (movie, date, session, cinema_name, cinema_province, tech) VALUES($1, $2, $3, $4, $5,$6) RETURNING id",
      [
        req.body.movie,
        req.body.date,
        req.body.session,
        req.body.cinema_name,
        req.body.cinema_province,
        req.body.tech,
      ],
      (event) => event.id
    ).then((data) => {
      res.send(data);
    });
  });
router.route("/:movie").get((req, res) => {
  const { movie } = req.params;
  db.query("SELECT * FROM ticket WHERE movie = $1", [movie])
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
});
module.exports = router;

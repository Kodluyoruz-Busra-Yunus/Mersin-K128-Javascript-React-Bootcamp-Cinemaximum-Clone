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
    db.query("SELECT * FROM movie")
      .then(function (data) {
        res.send(data);
      })
      .catch(function (error) {
        res.send(error);
      });
  })
  .post((req, res) => {
    db.one(
      "INSERT INTO movie (title, image, director, description, players, technologies, warnings, formats, genre, fragman,comments, rate, duration, date) VALUES($1, $2, $3, $4, $5,$6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING id",
      [
        req.body.title,
        req.body.image,
        req.body.director,
        req.body.description,
        req.body.players,
        req.body.technologies,
        req.body.warnings,
        req.body.formats,
        req.body.genre,
        req.body.fragman,
        req.body.comments,
        req.body.rate,
        req.body.duration,
        req.body.date,
      ],
      (event) => event.id
    ).then((data) => {
      res.send(data);
    });
  });

router.route("/:title").get((req, res) => {
  const { title } = req.params;
  db.query("SELECT * FROM movie WHERE movie = $1", [title])
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      res.send(error);
    });
});
module.exports = router;

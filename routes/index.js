const express = require("express");
const axios = require("axios");
const router = express.Router();

/* GET Superheros by Name. */
router.get("/search/:name", function (req, res, next) {
  console.log(req.params.name);
  axios
    .get(
      `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}/search/${req.params.name}`
    )
    .then(({ data }) => {
      res.status(200).json(data.results);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

/* GET Superhero by ID */
router.get("/superhero/:id", function (req, res, next) {
  axios
    .get(
      `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}/${req.params.id}`
    )
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

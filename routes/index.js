const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET home page. */
router.get('/search/:name', function (req, res, next) {
  axios
    .get(
      `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}/search/${req.params.name}`
    )
    .then((result) => {
      res.status(200).json(result.data.results);
    });
});

module.exports = router;

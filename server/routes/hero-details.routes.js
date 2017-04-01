var express = require('express');
var router = express.Router();
var pool = require('../config/database-pool.js'); // Creates database pool, if you need to change database, do it in the config object in this file

router.get('/', function (req, res) {
    var heroId = req.query.heroId;
  pool.connect()
    .then(function (client) {
      client.query('SELECT heroes.*, super_powers.name, super_powers.description FROM heroes JOIN super_powers ON heroes.power_id = super_powers.id WHERE heroes.id=$1', [heroId])
        .then(function (result) {
          client.release();
          res.send(result.rows[0]);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});

module.exports = router;

const express = require('express');
const watson = require('watson-developer-cloud');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const alchemyLanguage = watson.alchemy_language({
  api_key: 'b9e29853a8d24226c9e41d551010e78dca920e23'
});

let parameters = {};
const filePath = path.join(__dirname, 'assets/', 'hp_1.txt');

router.get('/', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    parameters = {
      html: data
    };
    return alchemyLanguage.combined(parameters, (error, response) => {
      if (error) {
        res.send({ response: error });
      }
      res.send({ response });
    });
  });
});

module.exports = router;

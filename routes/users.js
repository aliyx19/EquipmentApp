var express = require('express');
var router = express.Router();
var equipment = '../models/equipment'
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hola');
});
/* save equipment to database. */
router.post('/add/new', async function (req, res, next) {
  try {
    const eq = await new equipment(req.body).save();

    res.status(200).send("equipment created");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }

  res.send('hola');
});
module.exports = router;

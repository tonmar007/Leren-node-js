const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);

// Do work here
/*router.get('/', (req, res) => {
  const wes = { name: 'Wes', age: 100, cool: true };
  //res.send('Hey! It works!');
  //res.json(wes);
  //res.send(req.query.name);
  //res.json(req.query);
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog,
    title: 'I love food'
  });
});*/

/*router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});*/

module.exports = router;

const express = require('express');
const randomColor = require('randomcolor');

const router = express.Router();

router.get('/randomize', (req, res) => {
  var colorArr = randomColor({
    count: 200
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });
});
router.get('/red', (req, res) => {
  var colorArr = randomColor({
    hue: 'red',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/orange', (req, res) => {
  var colorArr = randomColor({
    hue: 'orange',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/yellow', (req, res) => {
  var colorArr = randomColor({
    hue: 'yellow',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/green', (req, res) => {
  var colorArr = randomColor({
    hue: 'green',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/blue', (req, res) => {
  var colorArr = randomColor({
    hue: 'blue',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/purple', (req, res) => {
  var colorArr = randomColor({
    hue: 'purple',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/brown', (req, res) => {
  var colorArr = randomColor({
    hue: '#8b4513',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});
router.get('/gray', (req, res) => {
  var colorArr = randomColor({
    hue: 'white',
    luminosity: 'light',
    count: 50
  });
  res.json({
    title: 'retrieved',
    data: colorArr
  });

});

module.exports = router;
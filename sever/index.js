var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var url = require('url');
var db = require('../database/data.js');
var stripe = require("stripe")("pk_test_wd9rThkNdTfjOnS9RXQIFPv6");
app.use(bodyParser.json());
app.use(express.static(_dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));


app.post('/users', function(req, res){
  let email = req.body.email;
  let userName = req.body.userName;
  let phone = req.body.phone;
  console.log("hola desdel server");
  if(!email) {
    res.sendStatus(400);
  }else {
    db.insertUser (email, userName, phone, (err, results) => {
      if (err) {
        res.status(500);
      }else {
        res.status(200).json(results);
      }
    });
  }
});

// app.post('/times', function(req, res){
//   let times = req.body.times;
//   if(!times) {
//     res.sendStatus(400);
//   } else {
//     db.insertTime (times, (err, results) => {
//       if (err) {
//         res.status(500);
//       } else {
//         res.status(200).json(results);
//       }
//     });
//   }
// });

app.post('/order', function(req, res){
  let lat = req.body.lat;
  let lon = req.body.lon;
  let userId = req.body.userId;
  let address = req.body.address;
  let size = req.body.size;
  let specialInd = req.bodyspecialInd;
  let service = req.body.service;
  let dates = req.body.dates;
  let times = req.body.times;
  let total = req.body.total;
  let status = req.body.status;
  if(!userId) {
    res.sendStatus(400);
  }else{
    db.insertOrder (lat, lon, userId, address, size, specialInd, service, dates, times, total, status, (err, results) => {
      if (err) {
        res.status(500);
      } else {
        res.status(200).json(results);
      }
    });
  }
});

app.post('/api/stripe', function(req, res, next) {
  const stripeToken = req.body.stripeToken;
    stripe.charges.create({
      amount: 999,
      currency: 'usd',
      description: 'Example charge',
      source: stripeToken,
}, function (err, charge){
  console.log('charge');
  if (err){
    res.send({
      success: false,
      message: 'Error'
    })
  } else{
    res.send({
      success: true,
      message: 'Success'
    });
   }
 });
});

app.get('/users', function (req, res) {
  db.selectUsers(function(err, data){
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("hi i love u att database")
      res.json(data);
    }
  });
});

app.get('/orders', function(req, res) {
  db.selectOrders(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("hi i sent the orders att database")
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

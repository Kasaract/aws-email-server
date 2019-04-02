const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const Subscriber = require('./models/subscriber');

const app = express();

mongoose.connect('mongodb+srv://SubscriberAdmin:WindyCharles@gary-newsletter-updates-spbqe.mongodb.net/test?retryWrites=true');

port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
})

app.get('/', (req, res) => {
    res.send('Hello from subscriber server!');
})

app.get('/subscribers', (req, res) => {
  Subscriber.find()
    .then(users => {
      console.log(users);
      res.status(200).json({
        data: users
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    })
})

app.post('/subscribers/add', (req, res) => {

  const { firstName, lastName, email } = req.query;
  const subscriber = new Subscriber({
    _id: new mongoose.Types.ObjectId(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    date: new Date()
  });
  subscriber
    .save()
    .then(result => console.log(result))
    .catch(err => console.log(err));
  res.status(201).json({
    message: 'Handling POST request - adding subscriber',
    addedSubscriber: subscriber
  })
})

app.listen(4000, () => {
    console.log( `Listening on port ${port}`);
})
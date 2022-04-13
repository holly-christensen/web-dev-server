// import express from "express";
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// import cors from "cors";
// import mongoose from "mongoose";
const app = express();
// const DB_USERNAME = process.env.DB_USERNAME
// const DB_PASSWORD = process.env.DB_PASSWORD
// mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.m8jeh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
const CONNECTION_STRING = `mongodb+srv://hollylovejoy:BEREAVE-prepay-hart@webdev-cluster.vug6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(CONNECTION_STRING);
// mongoose.connect('mongodb://localhost:27017/webdev', {
//     dbName: 'webdev',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => err ? console.log(err) :
//     console.log('Connected to webdev database'));

// import usersController   from "./controllers/users-controller.js";
// import tuitsController from "./controllers/tuits-controller.js";

app.use(cors());

app.use(cors());
app.use(express.json());


// const examples = require('./controllers/examples-controller');
// examples(app);
const tuitsController = require("./controllers/tuits-controller")
tuitsController(app);
const usersController = require("./controllers/users-controller");
usersController(app);

// app.get('/hello', (req, res) => {res.send('Hello World!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
// app.use(express.json());
//
// helloController(app);
// userController(app);
// tuitController(app);

app.listen(process.env.PORT || 4000);

// const app = express()
// mongoose.connect('mongodb://localhost:27017/cs4550-sp22');
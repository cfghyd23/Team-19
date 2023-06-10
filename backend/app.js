require('dotenv').config();
const connectDB = require('./db/connect');
const mongoose = require('mongoose');
const express = require('express');
const getAllDonors = require('./controllers/donors');
const app = express();
const cors = require('cors');
app.use(express.json());

const donorRouter = require('./routes/donors');
const patientRouter = require('./routes/patients');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Blood Warriors</h1>');
  });

  const port = process.env.PORT || 3000;

app.use('/donors', donorRouter);
app.use('/patients', patientRouter);


const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();







require('dotenv').config();
const connectDB = require('./db/connect');
const mongoose = require('mongoose');
const express = require('express');
const getAllDonors = require('./controllers/donors');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(
    cors({
      origin: process.env.FRONTEND_URI,
      methods: "GET,POST,PUT,DELETE,OPTIONS",
      credentials: true,
    })
  );

const donorRouter = require('./routes/donors');
const patientRouter = require('./routes/patients');
const emergencyRouter = require('./routes/emergency');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Blood Warriors</h1>');
  });

  const port = process.env.PORT || 3000;

app.use('/donors', donorRouter);
app.use('/patients', patientRouter);
app.use('/emergency',emergencyRouter);


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







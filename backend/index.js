const express = require('express');
const app = express();


app.use(express.json());
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const route = require('./routes/routes');
const dotenv = require("dotenv");
dotenv.config();






mongoose.connect(process.env.URL)
    .then(() => {
        console.log("Connected");
    })
    .catch((req, res) => {
        console.log("Error while connected");

    })





app.get('/', (req, res) => {


    res.send("hello i am homepage ");

})
app.use('/api', route);


const port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log("Server is running on port 5000");


})
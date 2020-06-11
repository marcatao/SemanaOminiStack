const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://root:otpDKDOPBAUay8Nb@cluster0-zm7ez.gcp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
app.use(cors('http://localhost:8000/'));
app.use(express.json());
app.use(routes);

app.listen(8000);


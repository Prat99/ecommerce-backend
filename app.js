const express = require('express');
const app = express();
const mongoose = require('moongoose');
require('dotenv').config();

const routes = require('./routes/routes');

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('db connected'));



// use routes as middleware all the traffice will direct through it.
app.use('/api', routes);


app.listen(3000, () => {
    console.log('server is running at 3000');
})
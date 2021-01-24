const express = require('express')
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose')
const route = require('./routes/index')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Connected')
})

route(app);

app.listen(port, () => {
    console.log("Listen...")
})
const express = require('express');
const mongoose = require('mongoose');
const https = require('https');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();
const cors = require("cors")

require('dotenv').config();
app.use(cors());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('database is connected!!'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const router = require('./routes/user');
// const update = require('./routes/editing');
// app.use('/api', update );
app.use('/api', router);


app.listen(port, () => {
    console.log(`the service is running on ${port}`)
});



mongoose.set('useNewUrlParser' , true);
mongoose.set('useFindAndModify' , false);
mongoose.set('useCreateIndex' , true);
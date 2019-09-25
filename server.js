const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
require('./app/routes')(app, {});
app.listen(port, () => {
    console.log('We are live on ' + port);
});

module.exports = function(app, db) {
    app.get('/notes', (req, res) => {
        // Здесь будем создавать заметку.
        console.log(req.body);
        res.send('Hello')
    });
};


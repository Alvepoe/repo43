const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const db             = require('./config/db');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, client) => {
    if (err) return console.log("adad" + err);
    let database = client.db('test');
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});



const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const cors = require('cors')


const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('public', express.static('public'))

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(cors())


app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine

// app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);

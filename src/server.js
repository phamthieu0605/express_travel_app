const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/db')
const route = require('./routes/index.route');
const ejsLayout = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Connect to db
db.connect();

// Static files
app.use(express.static(path.join(__dirname, '/public')));

// View engine configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.set('layout', 'layouts/layout');
app.use(ejsLayout);

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Route init
route(app);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

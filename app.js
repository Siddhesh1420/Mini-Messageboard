const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const indexRouter = require('./index');

app.use(express.urlencoded({ extended: true })); // To parse form data
app.use('/', indexRouter);

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});

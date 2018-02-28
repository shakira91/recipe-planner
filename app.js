const express = require('express');
const multer = require('multer');
const bodyparser = require('body-parser');
const appRoutes = require('./routes/app');
const signIn = require('./routes/signin');
const signUp = require('./routes/signup');
const update = require('./routes/update-recipes-array');
const add = require('./routes/add-user-recipe');
const deleteRecipe = require('./routes/delete-a-recipe');
const user = require('./routes/user');
const uploads = require('./routes/upload-photo');
const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('localhost:27017/users');


const app = express();

const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'app')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/signin', signIn);
app.use('/signup', signUp);
app.use('/recipes', update);
app.use('/add', add);
app.use('/delete', deleteRecipe);
app.use('/user', user);
app.use('/upload', uploads);
app.use('/', appRoutes);


app.use(function(req, res, next){
    return res.render('index');
});

module.exports = app;

app.listen(port, function() {
    console.log("App is running on port " + port);
});
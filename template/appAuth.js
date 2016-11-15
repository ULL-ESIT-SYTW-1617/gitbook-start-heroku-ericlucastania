"use strict";


var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;
var boolGithub = false;

passport.use(new Strategy({
    clientID: '217bf6cd072238e4f2d1',
    clientSecret: '3aac244b495a7fda4e113c46d8db90eeec137201',
    callbackURL: 'https://casianitoelmasbonito-alu0100786330.c9users.io/login/github/return'
},function(accessToken, refreshToken, profile, cb) {
    var token = require('./token.json');
    var github = require('octonode');
    var client = github.client(token.token);
    var ghorg = client.org('ULL-ESIT-SYTW-1617');
    ghorg.member(profile.username,function(err,bool){
      //console.log(JSON.stringify(bool,null,4));
      boolGithub = bool;
      if(err) console.log(err);
    });
    return cb(null, profile);
  }));
  

// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
  

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});




app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'gh-pages')));

app.set('port', (process.env.PORT || 8080));

app.set('view engine', 'ejs');



app.use(passport.initialize());
app.use(passport.session());

//routes


app.get('/', function(req, res){
    
  res.render('home',{user: req.user}); 
    
});

app.get('/book',function(req, res) {
  if(req.user && boolGithub)
    res.sendfile('gh-pages/juanito.html');
  else if (req.user)
    res.render('error');
  else
    res.render('login');
  
  
  
});

app.get('/home',function(req, res) {
   res.render('home',{user: req.user}); 
});

app.get('/login',function(req, res){

  app.get('/profile',function(req, res) {
     res.render('home'); 
  });

    res.render('login');
});

app.get('/login/github',passport.authenticate('github'));

app.get('/login/github/return', passport.authenticate('github', { failureRedirect: '/login' }),function(req, res) {
    res.redirect('/');
});

app.get('/profile',require('connect-ensure-login').ensureLoggedIn(),function(req, res,next){
  res.render('profile',{user: req.user});
});




app.listen(app.get('port'), function() {
  console.log('Node app ejecutandose en el puerto', app.get('port'));
});

module.exports = app;






var express = require('express');
var app = express();
const path = require('path');
const mongoose = require('mongoose');
const Teacher = require('./teacher.js')

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/sjcds', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to Mongoose")
});

var teacher = Teacher.find({});

app.get('/form', function(req, res){
    Teacher.find({}, function(err, teacher){
      res.render('form', { 
          Name: teacher
      });  
    })
    
    
});

app.post('/form', function(req, res){

    let newTeacher = new Teacher({
        Name: req.body.firstName.replace(/\s/g, '') + ' ' + req.body.lastName.replace(/\s/g, ''),
        
    });

    newTeacher.save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })
    res.redirect('/form');
    
});



app.get('/home', function(req, res){
    //res.sendFile(__dirname + '/pubic/home.html');l
    res.render('home');
});

app.get('/find', function(req, res){
    //res.sendFile(__dirname + '/public/find.html');
    res.render('find');
});

app.get(' ', function(req, res){
    //res.sendFile(__dirname + '/public/home.html');
    res.render('home');
});

app.get('/', function(req, res){
    //res.sendFile(__dirname + '/public/home.html');
    res.render('home');
});

app.get('/upload', function(req, res){
    //res.sendFile(__dirname + '/public/upload.html');
    res.render('upload');
});

const createTeacher = async teacherData => {
    const teacher = await Teacher.create(teacherData)
    return teacher
   }
   // Pick up a Teacher
async function findTeacher(firstName) {
    const teacher = await Teacher.findOne({ firstName });
    return teacher;
}
   // Collect all Teachers
const findAllTeacher = async firstName => {
    const teacher = await Teacher.find({})
    return teacher
   }


var server= app.listen( 5500, function(){ console.log("server listening");});



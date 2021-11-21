var express = require('express');
var app = express();
const path = require('path');
const mongoose = require('mongoose');
const Teacher = require('./teacher.js')

app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected to Mongoose")
});


app.get('/form', function(req, res){
    res.sendFile(__dirname + '/public/form.html');
});

app.get('/home', function(req, res){
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/find', function(req, res){
    res.sendFile(__dirname + '/public/find.html');
});

app.get(' ', function(req, res){
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/upload', function(req, res){
    res.sendFile(__dirname + '/public/upload.html');
});

const createTeacher = async teacherData => {
    const teacher = await Teacher.create(teacherData)
    return teacher
   }
   // Pick up a student
   const findTeacher = async firstName => {
    const teacher = await Teacher.findOne({firstName})
    return teacher
   }
   // Collect all students
   const findStudents = async firstName => {
    const teacher = await Teacher.find({})
    return teacher
   }


var server= app.listen( 5500, function(){ console.log("server listening");});



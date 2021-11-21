const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    title: String,
    firstName: String,
    lastName: String,

});

const teacher = mongoose.model('Teacher', teacherSchema);
module.exports = teacher;


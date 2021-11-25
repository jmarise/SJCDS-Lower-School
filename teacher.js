const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    Name: String,

});

module.exports = mongoose.model('Teacher', teacherSchema);
 


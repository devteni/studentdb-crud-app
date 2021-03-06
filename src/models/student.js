const mongoose = require("mongoose")
const { Schema } = mongoose;
// create a schema for the student.
const studentSchema = new Schema({
    name: String,
    email: String,
    country: String
})
const Student = mongoose.model("Student", studentSchema);

module.exports = Student
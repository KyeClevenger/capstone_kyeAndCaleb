const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    string_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    classroom_number: {
        type: String,
        required: true,
    },
    maximum_capacity: {
        type: Number,
        required: true,
    },
    credit_hours: {
        type: Number,
        required: true,
    },
    tuition_cost: {
        type: Number,
        required: true,
    },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;


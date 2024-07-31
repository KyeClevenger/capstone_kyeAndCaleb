const express = require('express');
const router = express.Router();
const {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
} = require('../controllers/courseController'); // Adjust the path as necessary

// Create a new course
router.post('/', createCourse);

// Get all courses
router.get('/', getCourses);

// Get a single course by ID
router.get('/:id', getCourseById);

// Update a course by ID
router.put('/:id', updateCourse);

// Delete a course by ID
router.delete('/:id', deleteCourse);

module.exports = router;

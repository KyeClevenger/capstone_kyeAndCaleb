const Course = require('../models/Course');

// Create a new course
const createCourse = async (req, res) => {
    const { string_id, title, description, schedule, classroom_number, maximum_capacity, credit_hours, tuition_cost } = req.body;

    try {
        const newCourse = new Course({
            string_id,
            title,
            description,
            schedule,
            classroom_number,
            maximum_capacity,
            credit_hours,
            tuition_cost,
        });

        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        console.log("Courses fetched successfully:", courses);
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: error.message });
    }
};


// Get a single course by ID
const getCourseById = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a course by ID
const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { string_id, title, description, schedule, classroom_number, maximum_capacity, credit_hours, tuition_cost } = req.body;

    try {
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.string_id = string_id;
        course.title = title;
        course.description = description;
        course.schedule = schedule;
        course.classroom_number = classroom_number;
        course.maximum_capacity = maximum_capacity;
        course.credit_hours = credit_hours;
        course.tuition_cost = tuition_cost;

        await course.save();
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.remove();
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCourse,
    getCourses,
    getCourseById,
    updateCourse,
    deleteCourse,
};

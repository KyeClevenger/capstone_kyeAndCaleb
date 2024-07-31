require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path'); 
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses'); 

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Connect to MongoDB
const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); 
    });

// Routes
app.use('/users', userRoutes);
app.use('/courses', courseRoutes);  

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

// Serve React files
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

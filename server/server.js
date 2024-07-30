// server/server.js

require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");

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
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);

// Routes
app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});

// Serve React files
const path = require("path");
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8800;
const MONGODB_URI = 'mongodb://localhost:27017/Database';

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000', // Update this if you deploy the frontend elsewhere
}));

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error("Error in connecting to database:", error));
db.once('open', () => console.log("Connected to database"));

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Signup endpoint
app.post("/signup", async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    if (!validateEmail(email)) {
        return res.status(400).send("Invalid email format");
    }

    try {
        const existingUser = await db.collection('users').findOne({ email: email });
        if (existingUser) {
            return res.status(409).send("Email already exists");
        }
    } catch (error) {
        console.error("Error checking existing email:", error);
        return res.status(500).send("Error checking existing email");
    }

    const data = {
        firstname,
        lastname,
        email,
        password // Consider hashing the password before storing it in production
    };

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            console.error("Error inserting record:", err);
            return res.status(500).send("Error inserting record");
        }
        console.log("Record inserted successfully");
        return res.status(200).send("Signup Successful");
    });
});

// Login endpoint
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send("Email and password are required.");
        }

        const user = await db.collection('users').findOne({ email: email, password: password });
        
        if (user) {
            console.log("Login Success");
            return res.status(200).send("Login Successful");
        } else {
            return res.status(401).send("Invalid email or password");
        }
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).send("Internal server error");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

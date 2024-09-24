const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/Auth');
const bodyParser = require('body-parser');
const path = require('path');
const productRoutes = require('./routes/ProductRoutes');
const userRoutes = require('./routes/userRoutes'); // Import your user routes
require('dotenv').config();





const app = express(); // Initialize the app

// Use CORS middleware
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true // If you need to allow credentials
};

app.use(cors(corsOptions));


// Additional headers for security
app.use((req, res, next) => {
    // Allow specific origins and allow cross-origin resource sharing
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your frontend URL
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Cross-Origin Resource Policy (CORP)
    res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    
    // Content Security Policy to allow CORS for images
    res.header("Content-Security-Policy", "default-src 'self'; img-src 'self' data: http://localhost:3001; script-src 'self'; style-src 'self';");
  
    next();
});

// Security middleware
app.use(helmet());

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes to authenticate user
app.use('/api/auth', authRoutes);

// Use product/sell routes
app.use('/sell', productRoutes);

app.use('/products', productRoutes); // This prefix is important

app.use('/users', userRoutes); // Add the user routes



// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from 'uploads' folder

// Start server
const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

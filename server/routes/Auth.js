const express = require('express');
const router = express.Router();
const cors = require('cors');        // Import cors middleware
const User = require('../models/User');
const validator = require('validator');



const app = express();               // Initialize express app

// Use CORS middleware
app.use(cors());        
// Register Route
router.post('/register', async (req, res) => {
  const { username, email, mobile, password, cpassword } = req.body;

  // Validate inputs
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!validator.isLength(password, { min: 14 })) {
    return res.status(400).json({ error: 'Password must be at least 14 characters long' });
  }

  if (password !== cpassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  if (!validator.isMobilePhone(mobile, 'any')) {
    return res.status(400).json({ error: 'Invalid mobile phone number' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    const user = new User({ username, email, mobile, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Validate inputs
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
  
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Compare password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      // Successful login
      res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;

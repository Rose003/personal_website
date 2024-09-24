// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

// GET user details by username
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Return the user object
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user details' });
    }
});

module.exports = router;

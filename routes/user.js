const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });


router.post('/submit', upload.array('images', 10), async (req, res) => {
  try {
    const { name, socialMediaHandles } = req.body;
    const images = req.files.map((file) => file.filename);

    // Parse socialMediaHandles from JSON string to array of objects

    const handles = JSON.parse(socialMediaHandles);

    const newUser = new User({
      name,
      socialMediaHandles: handles,
      images,
    });

    await newUser.save();
    res.status(201).json({ message: 'User submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting the user.' });
  }
});

// Route to fetch all users for the admin dashboard

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});

module.exports = router;
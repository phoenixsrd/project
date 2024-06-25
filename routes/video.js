// routes/videos.js
const express = require('express');
const router = express.Router();

// @route   GET api/videos/test
// @desc    Tests videos route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Videos Works' }));

module.exports = router;

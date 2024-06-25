// routes/music.js
const express = require('express');
const router = express.Router();

// @route   GET api/music/test
// @desc    Tests music route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Music Works' }));

module.exports = router;

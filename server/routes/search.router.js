const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all images from search
router.get('/', (req, res) => {
    res.sendStatus(200)
});

module.exports = router;
const express = require('express');
const pool = require('../modules/pool');
require('dotenv').config();
const axios = require('axios');
const router = express.Router();

// return all images from search
router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: "https://api.giphy.com/v1/gifs/search",
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: 'deadpool',
            limit: 1,
            offset: 0,
            rating: 'g',
            language: 'en'
        }
    })
        .then((response) => {
            console.log('Response is', response);
            res.send(response.data.data.images.original.url)
        })
        .catch((err) => {
            console.log('Error in GET Gif items', err);
        })
});

module.exports = router;
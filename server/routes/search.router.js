const express = require('express');
const axios = require('axios');
const router = express.Router();

// return all images from search
router.get('/:tag', (req, res) => {
    const { tag } = req.params;
    axios({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${tag}`
    })
        .then((response) => {
            console.log('URL is', response);
            res.send(response.data);
        })
        .catch((err) => {
            console.log('Error getting db from server', err);
        })
})

module.exports = router;
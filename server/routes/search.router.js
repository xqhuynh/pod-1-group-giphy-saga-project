const express = require('express');
const axios = require('axios');
const router = express.Router();

// return all images from search and assign req.params to variable
// path will be '/:keyword' so when user enters 'cat' keyword for example, 
// it'll // be something like 'http://localhost:3000/#/api/search/cats'
// where '/cats' is '/:keyword'
router.get('/:keyword', (req, res) => {
    // 'keyword' is user search input. assign it to variable object 
    // and use string interpolation to add to url path
    const { keyword } = req.params;
    console.log('Tag is: ', keyword);
    axios({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?api_key=0ss3FHMaxpBMuFL2NtwYK3mO6kFlwPhc&q=${keyword}&limit=5`,
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
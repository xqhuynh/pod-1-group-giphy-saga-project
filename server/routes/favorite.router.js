const express = require('express');
const pool = require('../modules/pool');
//add axios
const axios = require('axios')
//add dotenv
require('dotenv').config()
const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

  //variable to store query from favorite_gif
  const getFavorites = `
  SELECT "giphyId", "category".name from favorite_gif
  LEFT JOIN category ON favorite_gif."categoryId" = category.id;
  `
  pool.query(getFavorites)
    .then((result) => {

      console.log(result.rows);
      //loop through object to get and all ids
      //and join them with commas
      const getIds = result.rows.map(id => (
        id.giphyId
      )).join(',')

      console.log(getIds);

      axios({
        url: 'https://api.giphy.com/v1/gifs',
        method: 'GET',
        params: {
          api_key: process.env.GIPHY_API_KEY,
          ids: getIds
        }
      }).then((response) => {
        console.log(response.data);
        res.send(response.data)

      }).catch((err) => {
        console.log(err);
      })

    }).catch((err) => {
      console.log('Get favorite_gift table failed', err);
      res.sendStatus(500)
    })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('in router.post req.body is', req.body.giphy_id)
  const sqlQuery = `
    INSERT INTO "favorite_gif" ("giphyId")
    VALUES ($1)`;

    sqlParams = [req.body.giphy_id];

  pool.query(sqlQuery, sqlParams)
    .then(() => {res.sendStatus(201); })
    .catch((err) => {
      console.log('in pool.query post failed', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

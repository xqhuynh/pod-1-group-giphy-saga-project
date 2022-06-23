const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {

  //variable to store query from favorite_gif
  const getFavorites =  `
  SELECT "giphyId", "category".name from favorite_gif
  JOIN category ON favorite_gif."categoryId" = category.id;
  `
  pool.query(getFavorites)
    .then((result)=>{

     
      console.log(result.rows);
    //loop through object and get all ids
    //and join them with commas
     const getIds = result.rows.map(id => (
        id.giphyId
      )).join(',')

       

      console.log(getIds);

    }).catch((err)=>{

      console.log('Get favorite_gift table failed', err);

      res.sendStatus(500)

    })

  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
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

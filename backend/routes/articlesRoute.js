const express = require('express');
const router = express.Router();
const { getUrl, addUrl } = require('../controllers/articles');

router
  .route('/')
  .get(getUrl)
  .post(addUrl);


module.exports = router;
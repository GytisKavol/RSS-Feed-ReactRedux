const express = require("express");
const router = express.Router();
const { getUrlFilter } = require("../controllers/articlesFilter");

router.route("/").get(getUrlFilter);

module.exports = router;

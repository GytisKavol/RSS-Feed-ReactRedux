const express = require("express");
const router = express.Router();
const { getUrls, deleteUrl } = require("../controllers/urls");

router.route("/").get(getUrls);
router.route("/:id").delete(deleteUrl);

module.exports = router;

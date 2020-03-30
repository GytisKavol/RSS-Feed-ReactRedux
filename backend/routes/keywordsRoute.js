const express = require("express");
const router = express.Router();
const {
  getKeywords,
  addKeyword,
  deleteKeyword
} = require("../controllers/keywords");

router
  .route("/")
  .get(getKeywords)
  .post(addKeyword);

router.route("/:id").delete(deleteKeyword);
module.exports = router;

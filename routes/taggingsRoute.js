//GET /taggings: Get all taggings.
//GET /taggings/:id: Get single tagging.
//GET /taggings/researchers/:id: Get all taggings performed by a specific researcher.
//GET /taggings/animals/:id: Get all taggings performed on a specific animal.
//POST /taggings: Add new tagging.

const express = require("express");
const router = express.Router();


const {
  getAllTaggings,
  getSingleTagging,
  getResearcherTaggings,
  getAnimalTaggings,
  addNewTagging
} = require("../db/queries/taggings.js");

router.get("/", getAllTaggings);
router.get("/:id", getSingleTagging);
router.get("/researchers/:id", getResearcherTaggings);
router.get("/animals/:id", getAnimalTaggings);
router.post("/", addNewTagging);

module.exports = router;

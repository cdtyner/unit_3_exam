//GET /animals: Get all animals.
//GET /animals/:id: Get single animal.
//POST /animals: Add new animal.
//PATCH /animals/:id: Update single animal.
//DELETE /animals/:id: Delete single animal.

const express = require("express");
const router = express.Router();


const {
  getAllAnimals,
  getSingleAnimal,
  addNewAnimal,
  updateSingleAnimal,
  deleteAnimal
} = require("../db/queries/animals.js");

router.get("/", getAllAnimals);
router.get("/:id", getSingleAnimal);
router.post("/", addNewAnimal);
router.patch("/:id", updateSingleAnimal);
router.delete("/:id", deleteAnimal);

module.exports = router;

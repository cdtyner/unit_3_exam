const express = require("express")
const app = express()
const bp = require("body-parser")
const port = 3000;

const researchers = require("./routes/researchers.js")
const species = require("./routes/species.js")
const animals = require("./routes/animals.js")
const habitats = require("./routes/habitats.js")
const taggings = require("./routes/taggings.js")
const sightings = require("./routes/sightings.js")

app.use(bp.urlencoded({ extended: false}));// must have this
app.use(bp.json());// must have this

app.use("/researchers", researchers)
app.use("/species", species)
app.use("/animals", animals)
app.use("/habitats", habitats)
app.use("/taggings", taggings)
app.use("/sightings", sightings)


app.get("/", (req, res) => {
  res.send("")
})

app.get("*", (req, res) => {
  res.send("error")
})


app.listen(3000, () => {
  console.log('Listening on port 3000')// must have this
});


/////

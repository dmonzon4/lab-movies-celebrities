const mongoose = require("mongoose")
const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// all your routes here
router.get("/", (req, res, next) => {
    res.render("index");
  });

// Create celebrity

  router.get("/celebrities/create", async (req, res, next) => {
    try {
        const response = await Celebrity.find();
        res.render("celebrities/new-celebrity.hbs", {
            allCelebrities: response
        });
    } catch (err) {
        next(err);
    }
});


router.post("/celebrities/create", async (req, res, next) => {

    const {name, occupation, catchPhrase} = req.body

    try {

        await Celebrity.create({name, occupation, catchPhrase})
        res.redirect("/celebrities.hbs")

    } catch (err) {
        next(err)
    }

})

// Create celebrity

router.get("/celebrities", async (req, res, next) => {
    try {
        const response = await Celebrity.find();
        res.render("celebrities/celebrities.hbs", {
            allCelebrities: response
        });
    } catch (err) {
        next(err);
    }
});







module.exports = router;

























module.exports = router;
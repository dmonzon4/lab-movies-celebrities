const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


const celebrityRouter = require("./celebrities.routes.js")
router.use("/", celebrityRouter)

const movieRouter = require("./movies.routes.js")
router.use("/", movieRouter)


module.exports = router;

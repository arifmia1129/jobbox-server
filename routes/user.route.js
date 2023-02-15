const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("hello route working")
})


module.exports = router;
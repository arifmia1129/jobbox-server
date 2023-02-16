const router = require("express").Router();
const userController = require("../controller/user.controller");

router.post("/", userController.createUser);
router.get("/:email", userController.getUserByEmail);


module.exports = router;
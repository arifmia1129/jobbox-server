const router = require("express").Router();
const jobController = require("../controller/job.controller");

router.route("/")
    .post(jobController.createJob)
    .get(jobController.getJob);

router.get("/:id", jobController.getJobById)



module.exports = router;
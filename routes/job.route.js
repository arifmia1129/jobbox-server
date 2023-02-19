const router = require("express").Router();
const jobController = require("../controller/job.controller");

router.route("/")
    .post(jobController.createJob)
    .get(jobController.getJob);

router.get("/:id", jobController.getJobById)

router.post("/apply", jobController.applyToJob)
router.get("/applied/:email", jobController.appliedJob)
router.post("/query", jobController.jobQuery)
router.post("/reply", jobController.jobReply)
router.post("/status", jobController.toggleJobStatus)

module.exports = router;
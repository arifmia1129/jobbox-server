const router = require("express").Router();
const jobController = require("../controller/job.controller");

router.route("/")
    .post(jobController.createJob)
    .get(jobController.getJob);

router.get("/:id", jobController.getJobById)
router.get("/employer/:email", jobController.getJobsByEmail)

router.post("/apply", jobController.applyToJob)
router.get("/applied/:email", jobController.appliedJob)
router.post("/query", jobController.jobQuery)
router.post("/reply", jobController.jobReply)
router.post("/status", jobController.toggleJobStatus)
router.post("/message", jobController.sendMessage)
router.post("/reply-message", jobController.replyToMessage)

module.exports = router;
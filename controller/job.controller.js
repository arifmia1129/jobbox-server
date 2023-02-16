const Job = require("../model/job.model")

exports.createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();

        res.status(201).json({
            success: true,
            message: "Successfully created job"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}

exports.getJob = async (req, res) => {
    try {
        const jobs = await Job.find();

        res.status(201).json({
            success: true,
            message: "Successfully get jobs",
            jobs
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
exports.getJobById = async (req, res) => {
    try {
        const { id } = req.params;
        const jobs = await Job.findById(id);

        res.status(201).json({
            success: true,
            message: "Successfully get jobs",
            job
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
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

        res.status(200).json({
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
        const job = await Job.findById(id);

        res.status(200).json({
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

exports.applyToJob = async (req, res) => {
    try {
        const { id, email } = req.body;
        const job = await Job.findById(id);

        job.applicants.push(email);

        await job.save();

        res.status(201).json({
            success: true,
            message: "Successfully apply to job",
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
exports.jobQuery = async (req, res) => {
    try {
        const { jobId } = req.body;
        const job = await Job.findById(jobId);

        job.queries.push(req.body);

        await job.save();

        res.status(201).json({
            success: true,
            message: "Successfully apply to job"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
exports.jobReply = async (req, res) => {
    try {
        const { jobId, email, reply } = req.body;
        const job = await Job.findById(jobId);

        job.queries.forEach(async query => {
            if (query.email === email) {
                query.reply.push(reply);
                await job.save();
            }
        })


        // await job.save();

        res.status(201).json({
            success: true,
            message: "Successfully apply to job"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
exports.appliedJob = async (req, res) => {
    try {
        const { email } = req.params;
        const jobs = await Job.find({ applicants: { $in: email } });

        res.status(200).json({
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
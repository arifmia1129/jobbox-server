const mongoose = require("mongoose");
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
exports.getJobsByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const jobs = await Job.find({ email });

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

exports.applyToJob = async (req, res) => {
    try {
        const { id, email } = req.body;
        const job = await Job.findById(id);

        job.applicants.push({ email, message: [] });

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


exports.sendMessage = async (req, res) => {
    try {
        const { jobId, email, message } = req.body;
        const job = await Job.findById(jobId);

        job.applicants.forEach(async applicant => {
            if (applicant.email === email) {
                applicant.message.push({ message, reply: [] });
                await job.save();
            }
        })

        res.status(201).json({
            success: true,
            message: "Successfully send message"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
exports.replyToMessage = async (req, res) => {
    try {
        const { jobId, email, reply, msgId } = req.body;
        const job = await Job.findById(jobId);


        job.applicants.forEach(async applicant => {

            if (applicant.email === email) {
                applicant.message.forEach(async msg => {
                    if (msg._id == (msgId)) {
                        msg.reply.push(reply)
                        await job.save();
                        return res.status(201).json({
                            success: true,
                            message: "Successfully send message"
                        })
                    }
                })
            }
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
        const { email, sort } = req.params;
        const jobs = await Job.find({ "applicants.email": email }).sort({ "applicants.created_at": Number(sort) });

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

exports.toggleJobStatus = async (req, res) => {
    try {
        const { statusCode, jobId } = req.body;
        const job = await Job.findById(jobId);

        if (!job) {
            return res.status(400).json({
                success: false,
                message: "Job not found"
            })
        }

        if (statusCode == 0) {
            job.jobStatus = false;
            await job.save();
        }
        if (statusCode == 1) {
            job.jobStatus = true;
            await job.save();
        }

        res.status(200).json({
            success: true,
            message: "Successfully change job status"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken"
        })
    }
}
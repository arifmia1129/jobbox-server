const { Schema, model } = require("mongoose");

const jobSchema = Schema({
    email: {
        type: String,
        required: true
    },
    jobStatus: {
        type: Boolean,
        default: true
    },
    companyName: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    requirements: [{
        type: String,
        required: true
    }],
    responsibilities: [{
        type: String,
        required: true
    }],
    salaryRange: {
        type: String,
        required: true
    },
    skills: [{
        type: String,
        required: true
    }],
    workLevel: {
        type: String,
        required: true
    },
    applicants: [
        {
            created_at: {
                type: Date,
                default: Date.now
            },
            email: String,
            message: [{
                message: String,
                reply: [{
                    type: String
                }]
            }]
        }
        ,
        {
            type: String,
            required: true
        }
    ],
    queries: [{
        email: String,
        jobId: String,
        question: String,
        reply: [{
            type: String
        }]
    }]
}, {
    timestamp: true
})

const Job = model("Job", jobSchema);

module.exports = Job;
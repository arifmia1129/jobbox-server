const { Schema, model } = require("mongoose");

const candidateSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    country: {
        type: String,
        trim: true,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        required: true,
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    postcode: {
        type: String,
        trim: true,
        required: true,
    },
    role: {
        type: String,
        enum: {
            values: ["candidate", "employee"],
            message: "Role must be candidate or employee"
        }
    }
})

const Candidate = model("Candidate", candidateSchema);

module.exports = Candidate;
const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
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
    companyName: {
        type: String,
        trim: true,
        required: true,
    },
    employeeRange: {
        type: String,
        trim: true,
        required: true,
    },
    companyCategory: {
        type: String,
        trim: true,
        required: true,
    },
    roleInCompany: {
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

const Employee = model("Employee", employeeSchema);

module.exports = Employee;
const Employee = require("../model/employee.model")

exports.createUser = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).json({
            success: true,
            message: "Successfully create user as a candidate"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken",
            error: error.message
        })
    }
}
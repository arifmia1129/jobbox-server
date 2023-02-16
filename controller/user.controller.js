const Candidate = require("../model/candidate.model");
const Employee = require("../model/empolyee.model");


exports.createUser = async (req, res) => {
    try {
        const { role } = req.body;
        if (role === "candidate") {
            const candidate = new Candidate(req.body);
            await candidate.save();
            res.status(200).json({
                success: true,
                message: "Successfully create user as a candidate"
            })
        } else {
            const employee = new Employee(req.body);
            await employee.save();
            res.status(200).json({
                success: true,
                message: "Successfully create user as a employee"
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken",
            error: error.message
        })
    }
}

exports.getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;

        const candidate = await Candidate.findOne({ email });
        const employee = await Employee.findOne({ email });

        if (!candidate && !employee) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            })
        }

        if (candidate) {
            return res.status(200).json({
                success: true,
                message: "Successfully get user",
                user: candidate
            })
        }
        if (employee) {
            return res.status(200).json({
                success: true,
                message: "Successfully get user",
                user: employee
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something broken",
            error: error.message
        })
    }
}
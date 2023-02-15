const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("Job box server is running")
})


module.exports = app;
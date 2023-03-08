const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/user.route");
const jobRouter = require("./routes/job.route");

const app = express();

app.use(cors({
    origin: "https://jobbox-redux.netlify.app"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/job", jobRouter);

app.get("/", (req, res) => {
    res.send("Job box server is running")
})


module.exports = app;
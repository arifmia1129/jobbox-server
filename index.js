const app = require("./app");
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

app.listen(port, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb+srv://jobbox:Zn7juW0eXt7KoMBv@cluster0.ksfgrer.mongodb.net/job-box')
        .then(() => {
            console.log(`Server is running on PORT ${port}`);
        })
})


const app = require("./app");
const mongoose = require('mongoose');

const port = process.env.PORT || 8080;

app.listen(port, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://127.0.0.1:27017/jobbox')
        .then(() => {
            console.log(`Server is running on PORT ${port}`);
        })
})
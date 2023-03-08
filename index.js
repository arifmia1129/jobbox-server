const app = require("./app");
const mongoose = require('mongoose');
require("dotenv").config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log(`Server is running on PORT ${port}`);
        })
})


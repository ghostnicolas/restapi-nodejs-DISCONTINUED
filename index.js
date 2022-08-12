require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

app.use("/api/user", require("./src/routes/user/user.js"));
app.use("/api/auth", require("./src/routes/index.js"));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log(`[DATABASE] Connected.`);
}).catch(err => {
    return console.log(`[DATABASE] Error ocurred: ${err}`)
})

app.listen(port, () => {
    console.log(`Server listening.`)
})

module.exports = app;
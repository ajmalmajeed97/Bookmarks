const express = require('express')
const bookmarkRouter = require('./routers/bookmark')
const tagRouter = require('./routers/tag')
const config = require('./db/mongoose')
const mongoose = require("mongoose");

mongoose.connect(config.database.url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
    console.log("connected to MongoDB Atlas database successfully...");
});
mongoose.connection.on("error", err => {
    console.log("error: " + err);
});

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.use(bookmarkRouter)
app.use(tagRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
const express = require("express")
const app = express()

app.get("/api", (req, res) => {
    res.json("hello from the backend")
})

app.listen(5000, () => {
    console.log("the server is running on port 5000")
})
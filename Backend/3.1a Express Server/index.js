import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Maintenance in progress!</h1>")
})

app.get("/oke", (re, res) => {
    res.send("<h1>About Me</h1>")
})

app.listen(port, () => {
    console.log(`First Server running on port number ${port}`)
});
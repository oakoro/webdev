import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello, this is send</h1>")
})

app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>About Me</h1><p>My name is Oke<p/>")
})

app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Contact Me</h1><p>Phone: +44 123 754637<p/>")
})

app.listen(port, () => {
    console.log("Server starting on port "+port)
}                                                                                                                                                                                            )
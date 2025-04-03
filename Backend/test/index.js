import express, { urlencoded } from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("<h1>Hello World</h1>")
    console.log("Hello World")
})

app.get("/form",(req,res) => {
    res.sendFile(_dirname+"/public/form.html")
})

app.post("/register",(req,res) => {
    res.sendStatus(200);
})

app.get("/About",(req, res) => {
    res.send("<h1>About Me</h1><p>Thanks for visiting us</p>")
})



app.listen(port, () => {
    console.log("Server is listing on ${port}");
    
})
import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var formout = ""

app.use(bodyParser.urlencoded ({extended:true}))

function handler(req, res, next){
    console.log(req.body);
    formout = req.body["Email"]+" "+req.body["Password"];
    next();
}
 app.use(handler);

app.get("/",(req,res) => {
    res.sendFile(_dirname+"/public/form.html")
})

app.post("/submit",(req,res) => {
    console.log(req.body)
})


app.listen(port, () => {
    console.log("Listening on port "+port)
})
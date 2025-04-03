//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import expresss from "express"
import bodyParse from "body-parser"
import { dirname } from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));

const app = expresss();
const port = 3000;

var userAuthorised = false;

 app.use(expresss.urlencoded ({extended: true}));

function checkPassword(req,res,next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming"){
        userAuthorised = true
    }
    next()
}
app.use(checkPassword);





app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/public/index.html")
})

app.post("/check",(req,res) =>{
    if (userAuthorised){
        res.sendFile(_dirname+"/public/secret.html")
    }
    else {
        res.sendFile(_dirname+"/public/index.html")
    }
})

app.listen(port,() => {
    console.log("Listening on port "+port)
})

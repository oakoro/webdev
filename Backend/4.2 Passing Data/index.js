import express from "express"


const port = 3000;
const app = express();

app.use(express.urlencoded({extended: true}))



app.get("/", (req,res) => {
 res.render("index.ejs")
})

app.post("/submit", (req,res) => {
    var fname = req.body["fname"]
    var lname = req.body.lname
    var name = fname+lname
    console.log(name)
    var nameLength = name.length
    console.log(`${name} length is ${nameLength}`)
    res.render("index.ejs", {numberOfLetters: nameLength});
})


app.listen(port, () =>{
    console.log(`Server listening from ${port}`);
})
import express from "express"


const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/Home",(req,res)=>{
    res.render("home.ejs")
})

app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})

app.post("/Submit",(req,res)=>{
    // console.log("Thank you "+req.body["fname"]+" for visiting my page")
    const userName = req.body["fname"]
    res.render("contact.ejs",{user: userName })
})
app.listen(port,()=>{
    console.log("Listening to port "+port)
})
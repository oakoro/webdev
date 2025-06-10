import express from "express"

const port = 3000;
const app = express();

app.use(express.static("public"))


app.get("/", (req,res) => {
    res.render("index.ejs")
})

app.get("/contact", (req,res) => {
    res.render("contact.ejs")
})

app.get("/Active", (req,res) => {
    res.render("background.ejs")
})




app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
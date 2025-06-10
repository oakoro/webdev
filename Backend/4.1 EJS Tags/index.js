import express from "express"

const port = 3000;
const app = express();

app.get("/profile",(req,res) => {
    res.render("background.ejs")
})

app.get("/", (req,res) => {
    const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };

    res.render("index.ejs",data )
})

app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})
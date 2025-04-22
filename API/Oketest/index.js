import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        res.render("index.ejs",{data: result} );
    } catch (error) {
        console.error("Failed to make request:", error.message);
        console.log(console.error)
    }
})

app.listen(port ,(req,res)=>{
    console.log(port)
})
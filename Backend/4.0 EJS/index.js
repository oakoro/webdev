import express from "express"

const port = 3000
const app = express();

app.get("/",(req,res) => {
    const today = new Date();
    const day = today.getDay();
   console.log(day);

   let type = "a weekday"
   let adv = "It's time to work hard"
   if (day === 0 || day === 6) {
        type = "a weekend"
        adv = "It's time to have some fun"
   } 
   res.render("index.ejs",
    {dayType: type,
     advice: adv,
    }
   ) 
})



app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})
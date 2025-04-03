import express from "express";

const app = express();
const port = 3000;
// const d = new Date;


// let dayOfWeek = d.getDay()


// const dayNames = ["Sunday","Monday"]

// if (dayOfWeek != 0 || dayOfWeek != 6) {
//     alert("Hey! It's a weekday, it's time to work hard!")
// } else {
//     alert("Hey! It's the weekend, it's time to have fun!")
// }
app.get("/", (req, res) => {
    const today = new Date // for test ("March 30, 2025 12:00");
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = "It's time to work hard"

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "It's time to have fun"
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv})
});

app.listen(port,  () => {
    console.log('server running on port '+port)
});
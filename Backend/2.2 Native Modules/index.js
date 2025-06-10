const fs = require("fs")

var text = "I am a candidate for promotion"

// fs.writeFile("message.txt", text, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved")
// });

fs.readFile("./message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
});


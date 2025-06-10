import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request Method: ", req.url);
  next();
}


// app.use(morgan("tiny"))



app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>Hello Index3</h1>");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

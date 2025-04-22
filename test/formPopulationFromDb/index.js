import express from "express"
import bodyParser from "body-parser"
import pg from "pg"

const port = 3000;
const app = express();

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Pa%%word",
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

let currentUserId = 1;

let users = [
  {id:1, name: "Angela", color: "teal"},
  {id:2, name: "Jack", color: "powderblue"},
  {id:3, name: "Oke", color: "pink"}
];

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  })
  return countries;
};

app.get("/", async (req,res) => {
  const countries = await checkVisited();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: "teal"
  })
});

app.post("/add",(req,res) => {
  const input = req.body["country"];

  try {
    const result = db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'; ",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
       db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/");
      
    } catch (err) {
      console.log(err);
    }
    
  } catch (err) {
    console.log(err)
  }
});

app.post("/user", async (req,res) => {

});

app.post("/new", async (req,res) =>{})



app.listen(port,()=>{
  console.log("listening on :"+port)
})
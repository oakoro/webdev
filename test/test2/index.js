import express, { response } from "express"
import pg from "pg"
import bodyParser from "body-parser"
const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "Pa%%word",
    port: 5432
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (resquest,response) => {
    response.json({info: 'Node.js'})
})


    const userList = (request,response) => {
    db.query("select name from users", (error,results) => {
        if (error) {throw error}
        response.status(200).json(results.rows)
    })
}

app.get("/users", db.userList)
      

app.listen(port,() => {
    console.log('App running on port ',port )
})
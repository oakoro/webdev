import express from "express"
import bodyParser from "body-parser"
import pg from "pg"

const app = express()
const port = 3000

const db = new pg.Client ({
    host: "localhost",
    user: "postgres",
    password: "Pa%%word",
    port: 5432,
    database: "world"
});

db.connect().then(()=> console.log("connected"))

async function getUsers() {
     const result =  await db.query("select name from users", (err,res)=> {
        if (!err)
        {
            users = result.rows
            return users.find((user) => user.name == username);
            
        } else {
            console.log(err.message)
        }
    })
    return res.rows
    
}

db.query("select name from users", (err,res)=> {
    if (!err)
    {
        console.log(res.rows)
        
    } else {
        console.log(err.message)
    }
})

app.use(bodyParser.urlencoded({extended: true}))

app.get("/r/:subreddit", (req,res)=>{
    var sub = req.params.subreddit;
    res.render("index.ejs",{subreddit: sub})
})

app.get("/articles",(req,res)=>{
    var articles = [
        {title: "man Discovers Different Opinion", author: "Reginald", date: "9/2/45"},
        {title: "Tigers Aren't Great Pets", author: "Simon", date: "4/13/95"},
        {title: "Eating Cake for Breakfast", author: "Katie", date: "8/20/13"}
    ] ;
    res.render("index.ejs",{articles: articles})
})

app.get("/comments",(req,res)=>{
    var comments = [
        {author: "Adam", content: "I personally have never encountered a different opinion"},
        {author: "Ryan", content: "But what about Ligers? Are they good pets? "},
        {author: "Nick", content: "This woman is a genius"}
    ];
    res.render("comments.ejs",{comments: comments})
})



app.get("/pgusers",(req,res)=>{
    const currentUser = getUsers() 
    res.send(  "Welcome to my first API")
    res.render("pg.ejs",{users: users})
})


app.listen(port, ()=>{
    console.log('Listening to: '+port)
})

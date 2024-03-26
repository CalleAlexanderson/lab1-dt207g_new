const express = require("express");
const bodyParser = require("body-parser"); //bodyparser för att ta data från formulär
const mysql = require("mysql");

const port = process.env.port | 3000;
const app = new express;
app.set("view engine", "ejs"); //sätter view engine till ejs och använder views katalogen
app.use(express.static("public")); //statiska filer tas från public katalogen
app.use(bodyParser.urlencoded({ extended: true })) 

//skapar en connection till databasen dt207glab1 med en user av samma namn
const connection = mysql.createConnection({
    host: "localhost",
    user: "dt207glab1",
    password: "dt207g",
    database: "dt207glab1"
});

connection.connect((err) => {
    if (err) {
        console.log("connect failed: " + err);
        return;
    }
    console.log("connected to mysql");
});


// lägger till en sökväg till index.ejs
app.get("/", (req, res) => {
    res.render("index")
})

// lägger till en sökväg till about_site.ejs
app.get('/about_site', (req, res) => {
    res.render('about_site');
});

// lägger till en sökväg till add_course.ejs
app.get('/add_course', (req, res) => {
    res.render('add_course');
});

// app aktiveras när port(3000) söks på(vet inte korrekt term)
app.listen(port, () => {
    console.log("appen lyssnar");
});

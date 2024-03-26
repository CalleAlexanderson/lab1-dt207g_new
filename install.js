const mysql = require("mysql");

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

//tar bort tabellen course om den redan finns
connection.query(("DROP TABLE IF EXISTS Course"), (err, result) => {
    if (err) throw err;
    console.log("Tabellen Course raderad");
})

// skapar en tabbell för kurserna med courseID(PK), School(PK), courseName, Progression, Syllabus där
connection.query(`CREATE TABLE Course (
    courseID varchar(255) not null,
    School varchar(255) not null,
    courseName varchar(255),
    Progression varchar(1),
    Syllabus varchar(255),
    PRIMARY KEY (courseID, School))`
    , (err, result) => {
        if (err) throw err;

        console.log("table created: " + result);
    })

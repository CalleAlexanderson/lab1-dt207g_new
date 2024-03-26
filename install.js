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

    //kommandet för att lägga till kurser i tabellen course
let query = "INSERT INTO Course (courseID, School, courseName, Progression, Syllabus) VALUES ?"

// de kurser jag ska lägga till i tabellen course
let courses = [
    ['dt057g', 'Mittuniversitetet', 'Webbutveckling I', 'A', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/'],
    ['dt084g', 'Mittuniversitetet', 'Introduktion till programmering i JavaScript', 'A', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/'],
    ['dt200g', 'Mittuniversitetet', 'Grafisk teknik för webb', 'A', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT200G/'],
    ['dt068g', 'Mittuniversitetet', 'Webbanvändbarhet', 'B', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT068G/'],
    ['dt003g', 'Mittuniversitetet', 'Databaser', 'A', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT003G/'],
    ['dt211g', 'Mittuniversitetet', 'Frontend-baserad webbutveckling', 'B', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT211G/'],
    ['1ME321', 'Linneuniversitetet', 'Webbteknik 1', null, 'https://kursplan.lnu.se/kursplaner/kursplan-1ME321-4.pdf'],
    ['1ME322', 'Linneuniversitetet', 'Webbteknik 2', null, 'https://kursplan.lnu.se/kursplaner/kursplan-1ME322-2.1.pdf']
];

// gör en query mot servern med query som kommandet och courses som datan som läggs in
connection.query(query, [courses], (err, results) => {
    if (err) throw err;

    console.table(results)
});

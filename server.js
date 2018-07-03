// const http = require("http");

// const server = http.createServer(function(req, res) {
//   console.log(`user visited ${req.url}`);
//   res.end("hello!");
// });

// console.log("listening on http://localhost:3000");
// server.listen(3000);

// change your server to look like this to run npm install express:
// const express = require("express");
// const app = express();

// app.get("/", function(req, res) {
//     res.end("Welcome to my site!");
// });

// app.get("/complement", function(req, res) {
//     res.end("You look nice today");
// });

// app.listen(3000);
// console.log("listening on http://localhost:3000");

// Refactor your server.js file to look like this after creating index.html:

const express = require("express");
const path = require("path");

const complements = [
    "You look nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insult = [
    "Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!",
    "I am pigeon-liver'd and lack gall",
    "His wit's as thick as a Tewkesburt mustard",
    "I am sick when I do look on thee",
    "I'll beat thee, but I would infect my hands",
    "I scorn you, scurvy companion",
    "More of your conversation would infect my brain",
    "My wife's a hobbt horse!",
    "Peace, ye fat guts!"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insult.length);
    return insult[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function(req, res) {
    res.json({
        complement: getRandomComplement(),
    }).end();
});

app.get("/insult", function(req, res) {
    res.json({
        insult: getRandomInsult()
    }).end();
});

app.use("/public", express.static("./public"));

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
   console.log(`Listening on Port ${port}`);
});

const express = require('express');
const app = express();



app.get('/greeting', (req, res) => {
    res.send("Hello stranger")
});

app.get('/greeting/:name', (req, res) => {
    res.send("What's Up " + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const tip = (req.params.total / 100) * req.params.tipPercentage
    res.send(tip.toString())
})

// Magic 8 ball answer array
const ballResponse = ["It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful"];

const resp8 = Math.floor(Math.random() * ballResponse.length)

app.get('/magic/:question', (req, res) => {
    const htmlH1 = `<h1>${ballResponse[resp8]}</h1>`
    res.send((req.params.question) + htmlH1)
})

app.listen(3000, () => {
    console.log("listening")
});
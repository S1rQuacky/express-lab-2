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

app.listen(3000, () => {
    console.log("listening")
});
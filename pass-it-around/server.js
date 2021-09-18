const express = require('express');
const app = express();



// app.get('/', (req, res) => {
//     const bottles = ('99 Bottles of beer on the wall');
//     const lessBottles = `<a href="/98"> take one down, pass it around</a>`
//     res.send(bottles + lessBottles)
// })

app.get(['/','/:number_of_bottles'], (req, res) => {
    if(!req.params.number_of_bottles) {
        const bottles1 = ('99 Bottles of beer on the wall');
        let lessBottles1 = `<a href="/98"> take one down, pass it around</a>`
        res.send(bottles1 + lessBottles1)
    }else if(req.params.number_of_bottles == '0'){
        const bottles2 = ('0 Bottles of beer on the wall!! ');
        let lessBottles2 = `<a href="/"> Start over?</a>`
        res.send(bottles2 + lessBottles2)
    }else{
        let bottleNum = Number(req.params.number_of_bottles);
        let bottles = (`${bottleNum} Bottles of beer on the wall`);
        let newNum = bottleNum - 1
        let lessBottles = `<a href="/${newNum}"> take one down, pass it around</a>`
        res.send(bottles + lessBottles)
    }
})



app.listen(3000, () => {
    console.log("listening")
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./model/FoodModel');


app.use(bodyParser.json()); //top of the route for not getting errors

const Food = mongoose.model("food");



const mongoUri = 'mongodb+srv://furki:Furkimon123@cluster0.9vzfh.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("connected to mongo!")
})

mongoose.connection.on("errror", (err) => {
    console.log("error!", err)
})

app.post('/send-data', (req, res) => {
    const food = new Food({
        name: req.body.name,
        kcal: req.body.kcal,
        protein: req.body.protein,
        fat: req.body.fat,
        carbohydrate: req.body.carbohydrate,
        fiber: req.body.fiber
    })
    food.save()
    .then(data => {
        console.log(data)
        res.send("success")
    }).catch(err => {
        console.log(err)
    })
    
})

app.get('/', (req, res) => {
    res.send('Welcole to Node js')
})

app.listen(3000, () => {
    console.log("Server is running")
})
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name : String,
    kcal : Number,
    protein : Number,
    fat : Number,
    carbohydrate : Number,
    fiber : Number
});

mongoose.model("food", FoodSchema);


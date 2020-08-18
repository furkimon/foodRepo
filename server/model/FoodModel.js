const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name : String,
    kcal : String,
    protein : String,
    fat : String,
    carbohydrate : String,
    fiber : String
});

mongoose.model("food", FoodSchema);


const mongoose = require("mongoose")
const Products = mongoose.model("Products", new mongoose.Schema({
    image:String,
    title:String,
    price:Number
}))

module.exports = Products
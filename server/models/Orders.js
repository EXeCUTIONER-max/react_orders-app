const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    product: String,
    description: String,
    price: Number,
    number: Number,
    address: String
})

const OrderModel = mongoose.model("orders", OrderSchema)
module.exports = OrderModel
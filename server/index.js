const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const OrderModel = require('./models/Orders')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/user")

app.get('/', (req, res) => {
    OrderModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getOrder/:id', (req, res) => {
    const id  = req.params.id;
    OrderModel.findById({_id:id})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.put('/updateOrder/:id', (req, res) => {
    const id  = req.params.id;
    OrderModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email: req.body.email,
        product: req.body.product,
        description: req.body.description,
        price: req.body.price,
        number: req.body.number,
        address: req.body.address})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.delete('/deleteOrder/:id', (req, res) => {
    const id  = req.params.id;
    OrderModel.findByIdAndDelete({_id: id}) 
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createOrder", (req, res) => {
    OrderModel.create(req.body)
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.listen(3003, () => {
    console.log("Server is running")
})
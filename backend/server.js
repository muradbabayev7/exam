const express = require("express")
const app = express()
app.use(express.json())
const mongoose = require("mongoose")
const cors = require('cors')
const router = require("./routes/product.routes")
app.use(cors())
app.use("/Murad", router)
mongoose.connect("mongodb+srv://tu7pkew1z:murad123@murad.hr85y2b.mongodb.net/?retryWrites=true&w=majority").then(res=>{
    console.log('connect')
})
app.listen(8080,()=> {
    console.log('port running')
})
const Product = require('../model/product.model')
const productController = {
    getAll: async (req, res) => {
        try {
            const item = await Product.find({})
            res.status(200).send(item)
        } catch (error) {
            res.status(404).send("not found")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Product.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("not found")
        }
    },
    add: async (req, res) => {
        try {
            const { image, title, price } = req.body
            const newProduct = new Product({ image, title, price })
            await newProduct.save()
            res.status(201).send("created")
        } catch (error) {
            res.status(404).send("error")
        }
    },
    delete: async (req,res) => {
        try {
            const {id} = req.params
            await Product.findByIdAndDelete(id)
            res.send("deleted")
        } catch (error) {
            res.status(404).send("error")
        }
    }
}

module.exports = productController
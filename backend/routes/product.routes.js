const express = require("express")
const router = express.Router()
const productController = require("../controller/product.controller")

router.get('/', productController.getAll)
router.get('/:id', productController.getById)
router.post("/", productController.add)
router.delete('/:id', productController.delete)

module.exports = router
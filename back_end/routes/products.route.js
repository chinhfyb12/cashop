const productsController = require('../controllers/products.controller')
const router = require('express').Router();

router.get('/collections/get', productsController.getProducts)
router.post('/collections/add', productsController.createProduct)
router.get('/collections/product', productsController.getProduct)
router.get('/collections/productsrelated', productsController.getProductsRelated)

module.exports = router;
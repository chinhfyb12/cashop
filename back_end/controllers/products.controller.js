const ProductsModel = require('../models/products.model');

class ProductsController {
    async getProducts(req, res) {
        try {
            const queriesObj = { ...req.query }
            if(queriesObj.category2) {
                if(!queriesObj.page) {
                    ProductsModel.find({
                        $and: [
                            { categories: queriesObj.category1 },
                            { categories: queriesObj.category2 }
                        ]
                    })
                    .limit(parseInt(queriesObj.limit))
                    .then(products => res.json(products))
                } else {
                    const pageSize = 8;

                    const products = await ProductsModel.find({
                        $and: [
                            { categories: queriesObj.category1 },
                            { categories: queriesObj.category2 }
                        ]
                    })
                    .skip(pageSize*(parseInt(queriesObj.page - 1)))
                    .limit(pageSize)
                    .then(products => { return products })

                    const maxProducts = await ProductsModel.countDocuments({
                        $and: [
                            { categories: queriesObj.category1 },
                            { categories: queriesObj.category2 }
                        ]
                    }, (err, max) => {
                        return max;
                    })
                    
                    res.status(200).json({
                        maxProducts,
                        products: [...products]
                    })
                }
            } else {
                if(!queriesObj.page) {
                    ProductsModel.find({
                        categories: queriesObj.category1
                    })
                    .limit(parseInt(queriesObj.limit))
                    .then(products => res.json(products))
                } else {
                    const pageSize = 8;

                    const products = await ProductsModel.find({
                        categories: queriesObj.category1
                    })
                    .skip(pageSize*(parseInt(queriesObj.page - 1)))
                    .limit(pageSize)
                    .then(products => { return products })

                    const maxProducts = await ProductsModel.countDocuments({
                        categories: queriesObj.category1
                    }, (err, max) => {
                        return max;
                    })
                    res.status(200).json({
                        maxProducts,
                        products: [...products]
                    })
                }
            }
        } catch (err) {
            res.status(500).json('Error: ', err)
        }
    }
    async getProduct(req, res) {
        try {
            const queriesObj = { ...req.query }
            ProductsModel.find({ _id: queriesObj.id})
                        .limit(4)
                        .then(product => res.json(product))
        } catch (err) {
            res.status(500).json('Error: ', err)
        }
    }
    async getProductsRelated (req, res) {
        try {
            const queriesObj = { ...req.query }
            ProductsModel.find({
                $and: [
                    { categories: queriesObj.category },
                    { _id: { $ne: queriesObj.id } }
                ]
            })
            .limit(4)
            .then(products => res.json(products))
        } catch (err) {
            res.status(500).json('Error: ', err)
        }
    }
    async createProduct(req, res) {
        try {
            const {
                productId,
                nameProduct,
                price,
                imgUrlList,
                categories,
                colors,
                sizes
            } = req.body

            const newProduct = new ProductsModel({
                productId,
                nameProduct,
                price,
                imgUrlList,
                categories,
                colors,
                sizes
            })
            newProduct.save()
                        .then(() => res.json("added"))
                        .catch(err => res.status(400).json('Error: ', err))
        } catch (err) {
            res.status(500).json('Error: ', err)
        }
    }
}

module.exports = new ProductsController();
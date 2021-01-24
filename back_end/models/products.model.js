const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    nameProduct: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    imgUrlList: {
        type: Array,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    colors: {
        type: Array,
        required: false,
    },
    sizes: {
        type: Array,
        required: false
    }
}, {
    timestamps: true
})

const ProductsModel = mongoose.model('Products', productsSchema);

module.exports = ProductsModel;
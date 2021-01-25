import axios from 'axios';

function ProductsAPI (category1, category2, limit) {
    if(category2) {
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:5000/api/collections/get?category1=${category1}&category2=${category2}&limit=${limit}`)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => console.log(err))
        })
    } else {
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:5000/api/collections/get?category1=${category1}&limit=${limit}`)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => console.log(err))
        })
    }
}

export default ProductsAPI;
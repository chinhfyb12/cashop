import { Col } from 'antd';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { sendProductsInCart } from '../../store/actions'
import Product from '../product/Product';

const Products = (props) => {

    const cartLocalStorage = useSelector(state => state.productsInCart);
    const dispatch = useDispatch()

    const onAddToCart = product => {
        if(cartLocalStorage[0]) {
            let index = cartLocalStorage.findIndex(item => item.productId === product.productId)
            if(index >= 0) {
                cartLocalStorage[index] = {
                    ...cartLocalStorage[index],
                    quantity: cartLocalStorage[index].quantity + 1
                }
            } else {
                cartLocalStorage.push(product)
            }
        } 
        if(!cartLocalStorage[0]) {
            cartLocalStorage.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(cartLocalStorage))
        dispatch(sendProductsInCart(cartLocalStorage))
    }

    if(props.children) {
        return props.children.map((product, index) => {
            return (
                <Col className="gutter-row" key={index} lg={{span: 6}} md={{span: 8}} xs={{span: 12}}>
                    <Product 
                        nameProduct={product.nameProduct}
                        price={product.price}
                        imgUrl={product.imgUrl}
                        productId={product._id}
                        category1={product.categories[0]}
                        category2={product.categories[1]}
                        category3={product.categories[2]}
                        color={product.colors[0]}
                        statusLoading={false}
                        getProductId={onAddToCart}
                    />
                </Col>
            )
        })
    }
}
export default Products;
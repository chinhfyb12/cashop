import { Col } from 'antd'
import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { sendProductsInCart } from '../../store/actions'

const ProductsSlider = (props) => {

    const [slides, setSlides] = useState(4);
    const dispatch = useDispatch();

    const cartLocalStorage = useSelector(state => state.productsInCart);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };

    const [products, setProducts] = useState(null);

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

    useEffect(() => {
        // set slides show
        if(window.innerWidth >= 769) {
            setSlides(4)
        } else if(window.innerWidth >= 577 && window.innerWidth < 769) {
            setSlides(3)
        } else if(window.innerWidth < 577){
            setSlides(2)
        }
        // end set lides show

        if(props.children) {
            const temp = props.children.map((product, index) => {
                return (
                    <Col key={index} lg={{span: 6}} md={{span: 8}} xs={{span: 12}}>
                        <Product 
                            nameProduct={product.nameProduct}
                            price={product.price}
                            imgUrl={product.imgUrl}
                            productId={product._id}
                            category1={product.categories[0]}
                            category2={product.categories[1]}
                            category3={product.categories[2]}
                            color={product.colors[0]}
                            getProductId={onAddToCart}
                        />
                    </Col>
                )
            })
            setProducts(temp)
        }
    }, [props.children])

    return (
        <Slider {...settings}>
            {
                products
            }
        </Slider>
    )
}

export default ProductsSlider;
import { Col } from 'antd'
import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import Slider from "react-slick";

const Products = (props) => {

    const [slides, setSlides] = useState(4);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };

    const [products, setProducts] = useState(null);
    useEffect(() => {
        // set slides show
        if(window.innerWidth >= 769) {
            setSlides(4)
        } else if(window.innerWidth >= 577 && window.innerWidth < 769) {
            setSlides(3)
        } else if(window.innerWidth < 577){
            setSlides(2)
        }
        //
        if(props.children) {
            const temp = props.children.map((product, index) => {
                return (
                    <Col key={index} lg={{span: 6}} md={{span: 8}} xs={{span: 12}}>
                        <Product 
                            nameProduct={product.nameProduct}
                            price={product.price}
                            imgUrl={product.imgUrl}
                        />
                    </Col>
                )
            })
            setProducts(temp)
        }
    }, [])
    return (
        <Slider {...settings}>
            {
                products
            }
        </Slider>
    )
}

export default Products;
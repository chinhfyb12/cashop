import { Col } from 'antd';
import React from 'react'
import Product from '../product/Product.component';

const Products = (props) => {

    if(props.children) {
        return props.children.map((product, index) => {
            return (
                <Col className="gutter-row" key={index} lg={{span: 6}} md={{span: 8}} xs={{span: 12}}>
                    <Product 
                        nameProduct={product.nameProduct}
                        price={product.price}
                        imgUrl={product.imgUrl}
                    />
                </Col>
            )
        })
    }
}
export default Products;
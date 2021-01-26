import { Col } from 'antd';
import React from 'react'
import Product from '../product/Product';

const Products = (props) => {

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
                        statusLoading={false}
                    />
                </Col>
            )
        })
    }
}
export default Products;
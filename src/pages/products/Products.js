import { Breadcrumb, Col, Divider, Row, Select, Typography } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import Products from '../../components/products/Products';
import './Products.css';

const ProductsPage = () => {

    let products = [
        {
            nameProduct: 'San pham 1',
            price: 300000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535'
        },
        {
            nameProduct: 'San pham 2',
            price: 300000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535'
        },
        {
            nameProduct: 'San pham 3',
            price: 300000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535'
        },
        {
            nameProduct: 'San pham 4',
            price: 300000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535'
        },
        {
            nameProduct: 'San pham 5',
            price: 300000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535'
        },
        {
            nameProduct: 'San pham 6',
            price: 300000,
            imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535'
        }
    ]

    return (
        <div className="container-products">
            <Row className="box-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to='/'>home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        k-drama
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Divider />
            <Row className='row-title'>
                <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Typography.Title level={2}>k-drama</Typography.Title>
                </Col>
                <Col className='sort-tool' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Typography.Text>Sort by</Typography.Text>
                    <Select defaultValue={0} style={{ width: 150 }}>
                        <Select.Option value={0}>{`A -> Z`}</Select.Option>
                        <Select.Option value={1}>{`Z -> A`}</Select.Option>
                        <Select.Option value={2}>Price: low to high</Select.Option>
                        <Select.Option value={3}>Price: high to low</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Products>
                    { products }
                </Products>
            </Row>
        </div>
    )
}
export default ProductsPage;
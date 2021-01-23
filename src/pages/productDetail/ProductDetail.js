import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Row, List, Breadcrumb, Divider, Typography, Select, Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Products from '../../components/products/Products';
import './ProductDetail.css'

const ProductDetail = () => {
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
    ]

    const listImgUrl = ['https://cdn.shopify.com/s/files/1/0283/0824/2504/products/A00000012156204ko_540x.jpg?v=1598027817', 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/44_40d7efb1-21ed-4d48-8ff1-72efb358ff48_540x.jpg?v=1598027817']
    const [avtUrl, setAvtUrl] = useState(listImgUrl[0]);

    return (
        <div className="box-product-detail">
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
            <Row className="box-img">
                <Col lg={{span: 10}} md={{span: 10}} xs={{span: 16}}>
                    <Card 
                        hoverable={false}
                        cover={<img alt="" src={avtUrl} />}
                    ></Card>
                    <List className="list-img">
                        {
                            listImgUrl.map((url, index) => {
                                return (
                                    <List.Item 
                                        key={index} 
                                        className={ url === avtUrl ? 'active' : ''}
                                        onClick={() => setAvtUrl(url)}
                                    >
                                        <img style={{width: '100%'}} src={url} alt=""/>
                                    </List.Item>
                                )
                            })
                        }
                    </List>
                </Col>
                <Col lg={{span: 14}} md={{span: 14}} xs={{span: 24}} className="box-info">
                    <List>
                        <List.Item>
                            <Typography.Title>[PERIPERA] Ink the Airy Velvet</Typography.Title>
                        </List.Item>
                        <List.Item>
                            <Typography.Title>600.000 vnd</Typography.Title>
                        </List.Item>
                        <List.Item className="item-color">
                            <Typography.Text>Color</Typography.Text>
                            <Select defaultValue="lucy" style={{ width: 150 }}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="Yiminghe">yiminghe</Select.Option>
                            </Select>
                        </List.Item>
                        <List.Item>
                            <Button>
                                <Typography.Title level={4}>ADD TO CART</Typography.Title>
                                <ShoppingCartOutlined />
                            </Button>
                        </List.Item>
                        <List.Item className="buy">
                            <Button>
                                <Typography.Title level={4}>BUY IT NOW</Typography.Title>
                            </Button>
                        </List.Item>
                    </List>
                </Col>
            </Row>
            <Divider />
            <Row className="box-realated-products">
                <Row className="box-title">
                    <Typography.Title>Related products</Typography.Title>
                </Row>
                <Row className="box-link">
                    <Link to='/'>{`More K-drama >`}</Link>
                </Row>
                <Row gutter={16}>
                    <Products>
                        { products }
                    </Products>
                </Row>
            </Row>
        </div>
    )
}

export default ProductDetail;
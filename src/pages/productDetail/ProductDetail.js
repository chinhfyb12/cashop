import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Row, List, Divider, Typography, Select, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Products from '../../components/products/Products';
import './ProductDetail.css'
import axios from 'axios'
import formatMoney from '../../common/formatMoney'
import ProductsAPI from '../../common/api/productsAPI'

const ProductDetail = () => {

    const param = useParams();

    const [product, setProduct] = useState({
        nameProduct: '',
        price: '',
        colors: [],
        size: [],

    })
    const [listImgUrl, setListImgUrl] = useState([])
    const [avtUrl, setAvtUrl] = useState(null);
    const [productsRelated, setProductsRelated] = useState([])

    const getProductsRelated = async (category1, category2, limit) => {
        const productsMongo = await ProductsAPI(category1, category2, limit)
        return productsMongo;
    }

    useEffect(() => {
        //get product detail
        axios.get(`http://localhost:5000/api/collections/product?id=${param.id}`)
            .then(res => {
                setProduct(res.data[0])
                setListImgUrl(res.data[0].imgUrlList)
                setAvtUrl(res.data[0].imgUrlList[0])

                //get products related
                getProductsRelated(res.data[0].categories[2]).then(res => {
                    const tempProducts = res.map(product => {
                        return {
                            ...product,
                            imgUrl: product.imgUrlList[0]
                        }
                    })
                    setProductsRelated(tempProducts)
                })
            })
    }, [param.id])
    // let products = [
    //     {
    //         nameProduct: 'San pham 1',
    //         price: 300000,
    //         imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535',
    //         categories: [1, 2, 3]
    //     },
    //     {
    //         nameProduct: 'San pham 2',
    //         price: 300000,
    //         imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535',
    //         categories: [1, 2, 3]
    //     },
    //     {
    //         nameProduct: 'San pham 3',
    //         price: 300000,
    //         imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535',
    //         categories: [1, 2, 3]
    //     },
    //     {
    //         nameProduct: 'San pham 4',
    //         price: 300000,
    //         imgUrl: 'https://cdn.shopify.com/s/files/1/0283/0824/2504/products/CASPERGRAPHICSWEATSHIRTJA_BLUEGREEN_1_360x.jpg?v=1611297535',
    //         categories: [1, 2, 3]
    //     },
    // ]

    return (
        <div className="box-product-detail">
            <Row className="box-breadcrumb">
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
                            <Typography.Title>{ product.nameProduct }</Typography.Title>
                        </List.Item>
                        <List.Item>
                            <Typography.Title>{formatMoney(product.price)} vnd</Typography.Title>
                        </List.Item>
                        {
                            product.colors[0] ? (
                                <List.Item className="item-color">
                                    <Typography.Text>Color</Typography.Text>
                                    <Select defaultValue={product.colors[0]} style={{ width: 150 }}>
                                        {
                                            product.colors.map((color, index) => {
                                                return (
                                                    <Select.Option key={index} value={color}>{color}</Select.Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </List.Item>
                            ) : ''
                        }
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
                        { productsRelated }
                    </Products>
                </Row>
            </Row>
        </div>
    )
}

export default ProductDetail;
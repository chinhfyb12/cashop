import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Row, List, Divider, Typography, Select, Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import Products from '../../components/products/Products';
import './ProductDetail.css'
import axios from 'axios'
import formatMoney from '../../common/formatMoney'

const ProductDetail = () => {

    const match = useRouteMatch();

    let idProduct; //id product
    if(match.params.id === undefined) {
        idProduct = match.path.slice(match.path.lastIndexOf('.') + 1);
    } else {
        idProduct = match.params.id
    }

    const [product, setProduct] = useState({
        nameProduct: '',
        price: '',
        colors: [],
        size: [],
        categories: []
    })
    const [listImgUrl, setListImgUrl] = useState([])
    const [avtUrl, setAvtUrl] = useState(null);
    const [productsRelated, setProductsRelated] = useState([
        {
            nameProduct: '',
            price: '',
            imgUrl: '',
            categories: []
        }
    ])
    const [category, setCategory] = useState(null)

    useEffect(() => {
        //get product detail
        axios.get(`http://localhost:5000/api/collections/product?id=${idProduct}`)
            .then(res => {
                setProduct(res.data[0])
                setListImgUrl(res.data[0].imgUrlList)
                setAvtUrl(res.data[0].imgUrlList[0])
                setCategory(res.data[0].categories[2])

                //get products related
                axios.get(`http://localhost:5000/api/collections/productsrelated?category=${res.data[0].categories[2]}&id=${idProduct}`)
                        .then(res => {
                            const tempProducts = res.data.map(product => {
                                return {
                                    ...product,
                                    imgUrl: product.imgUrlList[0]
                                }
                            })
                            setProductsRelated(tempProducts);

                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        })
            })
    }, [idProduct])

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
            <div className="box-realated-products">
                <Row className="box-title">
                    <Typography.Title>Related products</Typography.Title>
                </Row>
                <Row className="box-link">
                    <Link to={`/collections/${product.categories[0]}/${product.categories[1]}/${product.categories[2]}`}>{`More ${category} >`}</Link>
                </Row>
                <Row gutter={16}>
                    <Products>
                        { productsRelated }
                    </Products>
                </Row>
            </div>
        </div>
    )
}

export default ProductDetail;
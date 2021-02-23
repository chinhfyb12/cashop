import { MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card, Col, Row, List, Divider, Typography, Select, Button, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import Products from '../../components/products/Products';
import './ProductDetail.css'
import axios from 'axios'
import formatMoney from '../../common/formatMoney'
import Slider from "react-slick";
import { useSelector, useDispatch } from 'react-redux';
import { sendProductsInCart } from '../../store/actions'

const ProductDetail = () => {

    const match = useRouteMatch();
    const [loadingProductD, setLoadingProductD] = useState(true)
    const [loadingProductsR, setLoadingProductsR] = useState(true)
    const [slides, setSlides] = useState(4);

    const cartLocalStorage = useSelector(state => state.productsInCart);
    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };

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
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState(null)

    useEffect(() => {

        if(window.innerWidth >= 769) {
            setSlides(4)
        } else if(window.innerWidth >= 577 && window.innerWidth < 769) {
            setSlides(3)
        } else if(window.innerWidth < 577){
            setSlides(2)
        }

        //get product detail
        axios.get(`http://localhost:5000/api/collections/product?id=${idProduct}`)
            .then(res => {
                setColor(res.data[0].colors[0])
                setProduct(res.data[0])
                setListImgUrl(res.data[0].imgUrlList)
                setAvtUrl(res.data[0].imgUrlList[0])
                setCategory(res.data[0].categories[2])
                setLoadingProductD(false)
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
                            setLoadingProductsR(false)
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        })
            })
    }, [idProduct])

    const renderLoading = () => {
        return (
            <Slider {...settings}>
                {
                    [1, 2, 3, 4].map(temp => {
                        return (
                            <Spin key={temp} size="large"/>
                        )
                    })
                }
            </Slider>
        )
    }
    const handleAddToCart = product => {
        let productAddToCart = {
            category1: product.categories[0],
            category2: product.categories[1],
            category3: product.categories[2],
            color,
            imgUrl: product.imgUrlList[0],
            nameProduct: product.nameProduct,
            price: product.price,
            productId: product._id,
            quantity,
            statusLoading: false
        }
        console.log(productAddToCart)
        if(cartLocalStorage[0]) {
            let index1 = cartLocalStorage.findIndex(item => item.productId === productAddToCart.productId)
            let index2 = cartLocalStorage.findIndex(item => item.color === productAddToCart.color)
            if(index1 >= 0 && index2 >= 0) {
                cartLocalStorage[index2] = {
                    ...cartLocalStorage[index2],
                    quantity: cartLocalStorage[index2].quantity + quantity
                }
            } else {
                cartLocalStorage.push(productAddToCart)
            }
        } 
        if(!cartLocalStorage[0]) {
            cartLocalStorage.push(productAddToCart)
        }
        localStorage.setItem('cart', JSON.stringify(cartLocalStorage))
        dispatch(sendProductsInCart(cartLocalStorage))
    }
    const handleMinusQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className="box-product-detail">
            <Row className="box-breadcrumb">
            </Row>
            <Divider />
            {
                loadingProductD ?   <Slider>
                                        <Spin size="large"/>
                                    </Slider>
                                    :
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
                                                            <Select defaultValue={color} style={{ width: 150 }} onChange={ (value) => setColor(value)}>
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
                                                <List.Item className="box-quantity">
                                                    <div className="action" onClick={() => handleMinusQuantity()}><MinusOutlined /></div>
                                                    <span className="quantity">{quantity}</span>
                                                    <div className="action" onClick={() => handlePlusQuantity()}><PlusOutlined /></div>
                                                </List.Item>
                                                <List.Item>
                                                    <Button onClick={() => handleAddToCart(product)}>
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
            }
            <Divider />
            <div className="box-realated-products">
                <Row className="box-title">
                    <Typography.Title>Related products</Typography.Title>
                </Row>
                {
                    loadingProductsR ?  renderLoading()
                                        :
                                        <>
                                            <Row className="box-link">
                                                <Link to={`/collections/${product.categories[0]}/${product.categories[1]}/${product.categories[2]}`}>{`More ${category} >`}</Link>
                                            </Row>
                                            <Row gutter={16}>
                                                <Products>
                                                    { productsRelated }
                                                </Products>
                                            </Row>
                                        </>
                }
            </div>
        </div>
    )
}

export default ProductDetail;
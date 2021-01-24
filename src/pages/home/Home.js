import {Card, Col, Divider, Row, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import blackpink from '../../images/blackpink.jpg';
import book from '../../images/book.jpg'
import ProductsSlider from '../../components/productsSlider/ProductsSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

const Home = () => {

    const [productsFashion, setProductsFashion] = useState([{
        nameProduct: '',
        price: 0,
        imgUrl: ''
    }])
    const [productsPop, setProductsPop] = useState([{
        nameProduct: '',
        price: 0,
        imgUrl: ''
    }])
    const [productsBeauty, setProductsBeauty] = useState([{
        nameProduct: '',
        price: 0,
        imgUrl: ''
    }])

    const suggestCategories = [
        {
            path: '/collections/k-pop/girl-group/black-pink',
            nameCategory: 'Black Pink',
            img: blackpink
        },
        {
            path: '/collections/k-drama/categories/book',
            nameCategory: 'Book',
            img: book
        }
    ]
    const renderSuggestCategories = () => {
        return suggestCategories.map((category, index) => {
            return (
                <Col key={index} lg={{span: 12}} md={{span: 12}} xs={{span: 12}} className="gutter-row">
                    <Link to={category.path}>
                        <Card
                            hoverable
                            cover={<img alt='' src={category.img} />}
                        >
                            <Meta title={category.nameCategory}/>
                        </Card>
                    </Link>
                </Col>
            )
        })
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/collections/get?category1=k-beauty')
            .then(res => {
                const tempProducts = res.data.map(product => {
                    return {
                        nameProduct: product.nameProduct,
                        price: product.price,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProductsBeauty(tempProducts)
            })

        axios.get('http://localhost:5000/api/collections/get?category1=k-fashion')
            .then(res => {
                const tempProducts = res.data.map(product => {
                    return {
                        nameProduct: product.nameProduct,
                        price: product.price,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProductsFashion(tempProducts)
            })

        axios.get('http://localhost:5000/api/collections/get?category1=k-pop')
            .then(res => {
                const tempProducts = res.data.map(product => {
                    return {
                        nameProduct: product.nameProduct,
                        price: product.price,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProductsPop(tempProducts)
            })
    }, [])

    return (
        <div className="container home">
            <div className="suggest-categories">
                <Row style={{marginBottom: '15px'}}>
                    <Col span={12}>
                        <Typography className='title'>Shop For</Typography>
                    </Col>
                    <Col span={12} className="col-link">
                        <Link className="categories-link" to='/collections'>{`More categories >`}</Link>
                    </Col>
                </Row>
                <Row gutter={32}>
                    { renderSuggestCategories() }
                </Row>
            </div>
            <Divider />
            <div className="categories">
                <div className="category">
                    <Row style={{marginBottom: '15px'}}>
                        <Col span={12}>
                            <Typography className='title'>K-Fashion</Typography>
                        </Col>
                        <Col span={12} className="col-link">
                            <Link className="categories-link" to='/collections/k-fashion'>{`More k-fashion >`}</Link>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <ProductsSlider>
                            { productsFashion }
                        </ProductsSlider>
                    </Row>
                </div>
                <Divider />
                <div className="category">
                    <Row style={{marginBottom: '15px'}}>
                        <Col span={12}>
                            <Typography className='title'>K-Pop</Typography>
                        </Col>
                        <Col span={12} className="col-link">
                            <Link className="categories-link" to='/collections/k-pop'>{`More k-pop >`}</Link>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <ProductsSlider>
                            { productsPop }
                        </ProductsSlider>
                    </Row>
                </div>
                <Divider />
                <div className="category">
                    <Row style={{marginBottom: '15px'}}>
                        <Col span={12}>
                            <Typography className='title'>K-Beauty</Typography>
                        </Col>
                        <Col span={12} className="col-link">
                            <Link className="categories-link" to='/collections/k-beauty'>{`More k-beauty >`}</Link>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <ProductsSlider>
                            { productsBeauty }
                        </ProductsSlider>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Home;
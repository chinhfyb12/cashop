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
import ProductsAPI from '../../common/api/productsAPI';

const Home = () => {

    const [productsFashion, setProductsFashion] = useState([{
        nameProduct: '',
        price: 0,
        imgUrl: '',
        categories: []
    }])
    const [productsPop, setProductsPop] = useState([{
        nameProduct: '',
        price: 0,
        imgUrl: '',
        categories: []
    }])
    const [productsBeauty, setProductsBeauty] = useState([{
        nameProduct: '',
        price: 0,
        imgUrl: '',
        categories: []
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

    const getProducts = async (category1, category2, limit) => {
        const productsMongo = await ProductsAPI(category1, category2, limit)
        return productsMongo;
    }

    useEffect(() => {
        getProducts('k-beauty', null, 8).then(res => {
            const tempProducts = res.map(product => {
                return {
                    ...product,
                    imgUrl: product.imgUrlList[0]
                }
            })
            setProductsBeauty(tempProducts)
        })
        getProducts('k-fashion', null, 8).then(res => {
            const tempProducts = res.map(product => {
                return {
                    ...product,
                    imgUrl: product.imgUrlList[0]
                }
            })
            setProductsFashion(tempProducts)
        })
        getProducts('k-pop', null, 8).then(res => {
            const tempProducts = res.map(product => {
                return {
                    ...product,
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
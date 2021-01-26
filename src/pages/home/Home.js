import {Card, Col, Divider, Row, Spin, Typography } from 'antd'
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
import Slider from "react-slick";

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [slides, setSlides] = useState(4);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };

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

    const getProducts = async (category1, category2, limit) => {
        const productsMongo = await ProductsAPI(category1, category2, limit)
        return productsMongo;
    }

    useEffect(() => {

        if(window.innerWidth >= 769) {
            setSlides(4)
        } else if(window.innerWidth >= 577 && window.innerWidth < 769) {
            setSlides(3)
        } else if(window.innerWidth < 577){
            setSlides(2)
        }

        const t1 = getProducts('k-beauty', null, 8)
        const t2 = getProducts('k-fashion', null, 8)
        const t3 = getProducts('k-pop', null, 8)

        Promise.all([t1, t2, t3]).then(res => {
            if(res[0]) {
                const tempProductsB = res[0].map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProductsBeauty(tempProductsB)
            }
            if(res[1]) {
                const tempProductsF = res[1].map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProductsFashion(tempProductsF)
            }
            if(res[2]) {
                const tempProductsP = res[2].map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProductsPop(tempProductsP)
            }
            setLoading(false)
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
                        {
                            loading ? renderLoading() : <ProductsSlider>
                                                            { productsFashion }
                                                        </ProductsSlider>
                        }
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
                        {
                            loading ? renderLoading() : <ProductsSlider>
                                                            { productsPop }
                                                        </ProductsSlider>
                        }
                        
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
                        {
                            loading ? renderLoading() : <ProductsSlider>
                                                            { productsBeauty }
                                                        </ProductsSlider>
                        }
                        
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Home;
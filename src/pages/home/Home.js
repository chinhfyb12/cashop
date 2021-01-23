import { Card, Col, Divider, Row, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import blackpink from '../../images/blackpink.jpg';
import book from '../../images/book.jpg'
import Products from '../../components/productsSlider/ProductsSlider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

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
                        <Products>
                            { products }
                        </Products>
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
                        <Products>
                            { products }
                        </Products>
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
                        <Products>
                            { products }
                        </Products>
                    </Row>
                </div>
            </div>
        </div>
    )
}
export default Home;
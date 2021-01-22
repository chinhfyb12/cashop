import { Card, Col, Divider, Row, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import blackpink from '../../images/blackpink.jpg';
import book from '../../images/book.jpg'
import Products from '../../components/productsSlider/ProductsSlider.component'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    const suggestCategories = [
        {
            nameCategory: 'Black Pink',
            img: blackpink
        },
        {
            nameCategory: 'Book',
            img: book
        }
    ]
    const renderSuggestCategories = () => {
        return suggestCategories.map(category => {
            return (
                <>
                    <Col lg={{span: 12}} md={{span: 12}} xs={{span: 12}} className="gutter-row">
                        <Link to='/'>
                            <Card
                                hoverable
                                cover={<img alt='' src={category.img} />}
                            >
                                <Meta title={category.nameCategory}/>
                            </Card>
                        </Link>
                    </Col>
                </>
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
                        <Link className="categories-link" to='/'>{`More categories >`}</Link>
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
                            <Link className="categories-link" to='/'>{`More k-fashion >`}</Link>
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
                            <Link className="categories-link" to='/'>{`More k-pop >`}</Link>
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
                            <Link className="categories-link" to='/'>{`More k-beauty >`}</Link>
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
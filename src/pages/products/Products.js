import { Col, Divider, Pagination, Row, Select, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import Products from '../../components/products/Products';
import './Products.css';
import ProductsAPI from '../../common/api/productsAPI'
import Slider from "react-slick";

const ProductsPage = () => {

    const { path } = useRouteMatch()
    const [loading, setLoading] = useState(true)
    const [maxProducts, setMaxProducts] = useState(1)
    const [page, setPage] = useState(1)
    const [sortVal, setSortVal] = useState(0)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const renderLoading = () => {
        return (
            <Slider {...settings}>
                <Spin size="large"/>
            </Slider>
        )
    }

    const getProducts = async (category1, category2, page, limit, sort) => {
        const productsMongo = await ProductsAPI(category1, category2, page, limit, sort)
        return productsMongo;
    }

    const onChangePage = (page, pageSize) => {
        setPage(page)
        setLoading(true)
    }

    const [products, setProducts] = useState([
        {
            nameProduct: '',
            price: 0,
            imgUrl: '',
            categories: [],
        }
    ]);
    const [category, setCategory] = useState(null)

    useEffect(() => {
        if((path.split('/').length - 1) === 2 || path.split('/').length - 1 === 4) {
            getProducts(path.slice(path.lastIndexOf('/') + 1), null, page, null, sortVal).then(res => {
                const tempProducts = res.products.map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProducts(tempProducts)
                setCategory(path.slice(path.lastIndexOf('/') + 1))
                setLoading(false)
                setMaxProducts(res.maxProducts)
            })
        } else if((path.split('/').length - 1) === 3) {
            getProducts(path.slice(path.lastIndexOf('/') + 1), path.slice(path.indexOf('/', 2) + 1,path.lastIndexOf('/')), page, null, sortVal).then(res => {
                const tempProducts = res.products.map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProducts(tempProducts)
                setCategory(path.slice(path.lastIndexOf('/') + 1))
                setLoading(false)
                setMaxProducts(res.maxProducts)
            })
        }
    }, [path, page, sortVal])

    const handleChangeValueSort = value => {
        setSortVal(value)
        setLoading(true)
    }

    const renderListProduct = () => {
        return (
            <>
                <Row className='row-title'>
                    <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                        <Typography.Title level={2}>{category}</Typography.Title>
                    </Col>
                    <Col className='sort-tool' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                        <Typography.Text>Sort by</Typography.Text>
                        <Select defaultValue={sortVal} style={{ width: 150 }} onChange={ value => handleChangeValueSort(value)}>
                            <Select.Option value={0}>Default</Select.Option>
                            <Select.Option value={1}>{`A -> Z`}</Select.Option>
                            <Select.Option value={2}>{`Z -> A`}</Select.Option>
                            <Select.Option value={3}>Price: low to high</Select.Option>
                            <Select.Option value={4}>Price: high to low</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row gutter={[24, 24]}>
                    <Products>
                        { products }
                    </Products>
                </Row>
            </>
        )
    }

    return (
        <div className="container-products">
            <Row className="box-breadcrumb">
            </Row>
            <Divider />
            {
                loading ? renderLoading() : renderListProduct()
            }
            <Pagination onChange={(page, pageSize) => onChangePage(page, pageSize)} defaultCurrent={1} total={maxProducts} pageSize={8}/>
        </div>
    )
}
export default ProductsPage;
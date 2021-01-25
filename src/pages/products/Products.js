import { Col, Divider, Row, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom';
import Products from '../../components/products/Products';
import './Products.css';
import ProductsAPI from '../../common/api/productsAPI'

const ProductsPage = () => {

    const { path } = useRouteMatch()

    const getProducts = async (category1, category2, limit) => {
        const productsMongo = await ProductsAPI(category1, category2, limit)
        return productsMongo;
    }

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null)

    useEffect(() => {
        if((path.split('/').length - 1) === 2 || path.split('/').length - 1 === 4) {
            getProducts(path.slice(path.lastIndexOf('/') + 1)).then(res => {
                const tempProducts = res.map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProducts(tempProducts)
                setCategory(path.slice(path.lastIndexOf('/') + 1))
            })
        } else if((path.split('/').length - 1) === 3) {
            getProducts(path.slice(path.lastIndexOf('/') + 1), path.slice(path.indexOf('/', 2) + 1,path.lastIndexOf('/'))).then(res => {
                const tempProducts = res.map(product => {
                    return {
                        ...product,
                        imgUrl: product.imgUrlList[0]
                    }
                })
                setProducts(tempProducts)
                setCategory(path.slice(path.lastIndexOf('/') + 1))
            })
        }
    }, [path])

    return (
        <div className="container-products">
            <Row className="box-breadcrumb">
            </Row>
            <Divider />
            <Row className='row-title'>
                <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Typography.Title level={2}>{category}</Typography.Title>
                </Col>
                <Col className='sort-tool' lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Typography.Text>Sort by</Typography.Text>
                    <Select defaultValue={0} style={{ width: 150 }}>
                        <Select.Option value={0}>{`A -> Z`}</Select.Option>
                        <Select.Option value={1}>{`Z -> A`}</Select.Option>
                        <Select.Option value={2}>Price: low to high</Select.Option>
                        <Select.Option value={3}>Price: high to low</Select.Option>
                    </Select>
                </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Products>
                    { products }
                </Products>
            </Row>
        </div>
    )
}
export default ProductsPage;
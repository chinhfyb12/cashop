import { ShoppingOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Input, List, Row, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/3903482.jpg';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux'
import { showCartModal, sendProductsInCart, sendPathProduct } from '../../store/actions'
import axios from 'axios'
import Slug from '../Slug';

const Header = () => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0)
    const [search, setSearch] = useState(null)
    const [products, setProducts] = useState([
        {
            category1: '',
            category2: '',
            category3: '',
            productId: '',
            imgUrlList: [],
            nameProduct: ''
        }
    ])
    const [blur, setBlur] = useState(false)

    const onShowModalCard = useCallback(() => {
        dispatch(showCartModal());
    },[dispatch]);

    const cart = [...useSelector(state => state.productsInCart)]

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart])
    
    useEffect(() => {
        //get cart local storage
        let cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
        if(cartLocalStorage === null) {
            cartLocalStorage = []
        }
        dispatch(sendProductsInCart(cartLocalStorage))
        //end get cart
    }, [])

    const handleSearchProducts = e => {
        setSearch(e.target.value.toLowerCase())
        axios.get(`http://localhost:5000/api/collections/search?q=${e.target.value.toLowerCase()}`)
            .then(res => {
                let tempProduct = res.data.map(product => {
                    return {
                        ...product,
                        category1: product.categories[0],
                        category2: product.categories[1],
                        category3: product.categories[2],
                        productId: product._id
                    }
                })
                setProducts(tempProduct)
            })
    }

    const onClickLink = useCallback((path) => {
        dispatch(sendPathProduct(path))
        setBlur(true)
    }, [dispatch])

    return (
        <div className="container-fluid header">
            <Row>
                <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}} className="logo">
                    <Link to='/'>
                        <img style={{width: '100%'}} src={logo} alt=''/>
                    </Link>
                </Col>
                <Col md={{span: 12}} className="container-action">
                    <div className="box-account">
                        <Link to='/login'>Sign in</Link>
                        <p>or</p>
                        <Link to='/sign-up'>Create an account</Link>
                    </div>
                    <div className="box-tools">
                        <div 
                            className="tool search" 
                            style={{width: '60%'}}
                        >
                            <Input.Search 
                                placeholder='Search product...' 
                                onChange={e => handleSearchProducts(e)}
                                onClick={() => setBlur(false)}
                            />
                            {
                                search ? <List 
                                            className={blur ? "active" : ''}
                                        >
                                            {
                                                products.map((product, index) => {
                                                        return  <List.Item key={index}>
                                                                    <Link to={`/collections/${product.category1}/${product.category2}/${product.category3}/${Slug(product.nameProduct)}.${product.productId}`}
                                                                        onClick={() => onClickLink(`/collections/${product.category1}/${product.category2}/${product.category3}`)}
                                                                    >
                                                                        <img style={{width: 40, marginRight: 10}} alt="" src={product.imgUrlList[0]}/>
                                                                        <Typography.Text ellipsis={true}>{product.nameProduct.toUpperCase()}</Typography.Text>
                                                                    </Link>
                                                                </List.Item>
                                                })
                                            }
                                        </List>
                                        : ''
                            }
                        </div>
                        <div className="tool">
                            <Badge count={quantity}>
                                <Button onClick={onShowModalCard}>
                                    <Typography>
                                        CART
                                    </Typography>
                                    <ShoppingOutlined />
                                </Button>
                            </Badge>
                        </div>
                    </div>
                </Col>
            </Row>
            <Navbar />
        </div>
    )
}
export default Header;
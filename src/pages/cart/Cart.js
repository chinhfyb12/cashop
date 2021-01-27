import { DeleteOutlined } from '@ant-design/icons'
import { Button, Divider, List, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'antd/lib/modal/Modal'
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { showCartModal, sendPathProduct, sendProductsInCart } from '../../store/actions'
import './Cart.css'
import formatMoney from '../../common/formatMoney'
import Slug from '../../common/Slug'

const Cart = () => {
    const dispatch = useDispatch();
    const titleEmpty = 'Your cart is currently empty.';
    const isShowCartModal = useSelector(state => state.showCartModal)
    
    const cart = useSelector(state => state.productsInCart)
    const [products, setProducts] = useState([])

    const onShowModalCard = useCallback(() => {
        dispatch(showCartModal());
    },[dispatch]);

    const onClickLink = useCallback((path) => {
        dispatch(sendPathProduct(path))
        onShowModalCard();
    }, [dispatch])

    const onDecrease = productId => {
        const index = cart.findIndex(item => item.productId === productId)
        if(cart[index].quantity > 1) {
            cart[index] = {
                ...cart[index],
                quantity: cart[index].quantity - 1
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(sendProductsInCart(cart))
    }
    const onAddMore = productId => {
        const index = cart.findIndex(item => item.productId === productId)
        cart[index] = {
            ...cart[index],
            quantity: cart[index].quantity + 1
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(sendProductsInCart(cart))
    }

    const onDeleteProduct = productId => {
        const index = cart.findIndex(item => item.productId === productId)
        cart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(sendProductsInCart(cart))
    }


    useEffect(() => {
        setProducts([...cart]);
    }, [cart])

    const renderProducts = (products) => {
        return products.map((product, index) => {
            return (
                <List.Item key={index} className='box-product'>
                    <div className="box">
                        <Link 
                            to={`/collections/${product.category1}/${product.category2}/${product.category3}/${Slug(product.nameProduct)}.${product.productId}`} 
                            className="img-link"
                            onClick={() => onClickLink(`/collections/${product.category1}/${product.category2}/${product.category3}`)}
                        >
                            <img style={{width: '100%'}} alt='' src={product.imgUrl}/>
                        </Link>
                        <div className="box-name">
                            <Link 
                                to={`/collections/${product.category1}/${product.category2}/${product.category3}/${Slug(product.nameProduct)}.${product.productId}`} 
                                className="product-link"
                                onClick={() => onClickLink(`/collections/${product.category1}/${product.category2}/${product.category3}`)}
                            >
                                {product.nameProduct}
                            </Link>
                            <Typography.Text>
                                {
                                    product.color ? product.color : ''
                                }
                            </Typography.Text>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-quantity active">
                            <div className="btn-add" onClick={() => onDecrease(product.productId)}>-</div>
                            <span>{product.quantity}</span>
                            <div className="btn-add" onClick={() => onAddMore(product.productId)}>+</div>
                        </div>
                        <Typography.Text className="price">{formatMoney(product.price)} vnd</Typography.Text>
                        <Button onClick={() => onDeleteProduct(product.productId)}>
                            <DeleteOutlined />
                        </Button>
                    </div>
                </List.Item>
            )
        })
    }
    
    return (
        <div className="box-cart">
            <Modal title="Shopping Cart" visible={isShowCartModal} onCancel={onShowModalCard}>
                <List>
                    {
                        products.length > 0 ? renderProducts(products)
                                            :
                                            <List.Item className="box-product">
                                                { titleEmpty }
                                            </List.Item>
                    }
                    <Divider />
                </List>
                <div className="box-checkout">
                    <div className="total">Subtotal <span>
                        {
                            formatMoney(products.reduce((acc, current) => acc + current.price * current.quantity, 0))
                        }
                    </span>vnd</div>
                    <Button>
                        CHECKOUT
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
export default Cart;
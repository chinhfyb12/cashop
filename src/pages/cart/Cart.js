import { DeleteOutlined } from '@ant-design/icons'
import { Button, Divider, List, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'antd/lib/modal/Modal'
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { showCartModal } from '../../store/actions'
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch();
    // const titleEmpty = 'Your cart is currently empty.';
    const isShowCartModal = useSelector(state => state.showCartModal)
    const onShowModalCard = useCallback(() => {
        dispatch(showCartModal());
    },[dispatch]);
    
    return (
        <div className="box-cart">
            <Modal title="Shopping Cart" visible={isShowCartModal} onCancel={onShowModalCard}>
                <List>
                    <List.Item className="box-product">
                        <div className="box">
                            <Link to='/' className="img-link">
                                <img style={{width: '100%'}} alt='' src="https://cdn.shopify.com/s/files/1/0283/0824/2504/products/9_f32db649-a624-48e7-a42c-cc4f738b4588_540x.jpg?v=1598027605"/>
                            </Link>
                            <div className="box-name">
                                <Link to='' className="product-link">[SKINFOOD] Buttery Cheek Cake</Link>
                                <Typography.Text>01.Berry & Cream</Typography.Text>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-quantity active">
                                <div className="btn-add">-</div>
                                <span>1</span>
                                <div className="btn-add">+</div>
                            </div>
                            <Typography.Text className="price">600.000 vnd</Typography.Text>
                            <Button>
                                <DeleteOutlined />
                            </Button>
                        </div>
                    </List.Item>
                    <Divider />
                </List>
                <div className="box-checkout">
                    <div className="total">Subtotal <span>600.000</span>vnd</div>
                    <Button>
                        CHECKOUT
                    </Button>
                </div>
            </Modal>
        </div>
    )
}
export default Cart;
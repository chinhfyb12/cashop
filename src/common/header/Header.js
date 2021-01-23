import { ShoppingOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Input, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import logo from '../../images/3903482.jpg';
import './Header.css';
import { useDispatch } from 'react-redux'
import { showCartModel } from '../../store/actions'

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className="container-fluid header">
            <Row>
                <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}} className='logo'>
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
                        <div className="tool" style={{width: '60%'}}>
                            <Input.Search placeholder='Search product...'/>
                        </div>
                        <div className="tool">
                            <Badge count={1}>
                                <Button onClick={ () => dispatch(showCartModel) }>
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
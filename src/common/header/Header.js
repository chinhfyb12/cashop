import { ShoppingOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Input, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.component';
import logo from '../../images/3903482.jpg';
import './Header.css';

const Header = () => {
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
                        <Link to='/'>Sign in</Link>
                        <p>or</p>
                        <Link to='/'>Create an account</Link>
                    </div>
                    <div className="box-tools">
                        <div className="tool" style={{width: '60%'}}>
                            <Input.Search placeholder='Search product...'/>
                        </div>
                        <div className="tool">
                            <Badge count={1}>
                                <Button>
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
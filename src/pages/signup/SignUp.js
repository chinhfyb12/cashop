import { Input, Row, Typography } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="box-sign-up">
            <Row>
                <Typography.Title level={3}>Create Account</Typography.Title>
                <form>
                    <Input className="txtName" placeholder="Full name"/>
                    <Input placeholder="Email" type="email"/>
                    <Input.Password placeholder="Password"/>
                    <Input.Password placeholder="Retype password"/>
                    <button type="submit" className="ant-btn">SIGN UP</button>
                </form>
                <div className="btn-login">or <Link to="/login">Login</Link></div>
            </Row>
        </div>
    )
}

export default SignUp;
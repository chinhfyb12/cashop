import { Input, Row, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return (
        <div className="box-login">
            <Row>
                <Typography.Title level={3}>Login</Typography.Title>
                <form>
                    <Input placeholder="Email" type="email"/>
                    <Input.Password placeholder="Password"/>
                    <button type="submit" className="ant-btn">SIGN IN</button>
                </form>
                <div className="box-signup">or <Link to="/sign-up">Sign up</Link></div>
            </Row>
        </div>
    )
}
export default Login;
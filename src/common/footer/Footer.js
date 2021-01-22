import { Col, Row, Typography } from 'antd';
import { List } from 'antd';
import React from 'react'
import './Footer.css'
import ins from '../../images/footer.png'

const Footer = () => {
    return (
        <>
            <Row className="footer">
                <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <List size="large">
                        <List.Item>
                            <Typography.Title level={5}>Get in touch</Typography.Title>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Tel: 0983452452</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Email: tempmail@gmail.com</Typography.Text>
                        </List.Item>
                        <List.Item>
                            <Typography.Text>Address: Bac Tu Liem, Ha Noi</Typography.Text>
                        </List.Item>
                    </List>
                </Col>
                <Col lg={{span: 12}} md={{span: 12}} xs={{span: 24}}>
                    <Typography.Title level={5}>Follow us on instagram</Typography.Title>
                    <img style={{width: '100%'}} alt='' src={ins} />
                </Col>
            </Row>
            <Row>
                <Typography.Text>© 2021 Phạm Đình Chỉnh</Typography.Text>
            </Row>
        </>
    )
}
export default Footer;
import { Button, Card, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Product.css'
import { HeartTwoTone  } from '@ant-design/icons';

const Product = (props) => {

    const [isHover, setHover] = useState(false);
    useEffect(() => {
        if(window.innerWidth <= 768) {
            setHover(true)
        }
    }, [])
    return (
        <div 
            className="box-product"
            onMouseOver={ () => {if(window.innerWidth > 768) {setHover(true)}}}
            onMouseOut={ () => {if(window.innerWidth > 768) {setHover(false)}}}
        >
            <div className={ isHover ? 'box-icon active' : 'box-icon'}>
                <Button>
                    <HeartTwoTone twoToneColor="#098777"/>
                </Button>
            </div>
            <Link to='/collections/detail'>
                <Card
                    hoverable
                    cover={<img alt='' src={props.imgUrl} />}
                >
                    <Meta title={props.nameProduct}/>
                    <Typography.Title level={3}> {props.price} vnd</Typography.Title>
                </Card>
            </Link>
        </div>
    )
}

export default Product;
import { Button, Card, Spin, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta';
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Product.css'
import { HeartTwoTone  } from '@ant-design/icons';
import formatMoney from '../../common/formatMoney'
import Slug from '../../common/Slug'
import { useDispatch } from 'react-redux';
import { sendPathProduct } from '../../store/actions'

const Product = (props) => {

    const dispatch = useDispatch();

    const onClickLink = useCallback((path) => {
        dispatch(sendPathProduct(path))
    }, [dispatch])

    const [isHover, setHover] = useState(false);
    useEffect(() => {
        if(window.innerWidth <= 768) {
            setHover(true)
        }
    }, [])

    return (
        <>
            {
                props.statusLoading ? (
                    <div>
                        <Spin size="large"/>
                    </div>
                ) : (
                    <div 
                        className=  "box-product"
                        onMouseOver={ () => {if(window.innerWidth > 768) {setHover(true)}}}
                        onMouseOut={ () => {if(window.innerWidth > 768) {setHover(false)}}}
                    >
                        <div className={ isHover ? 'box-icon active' : 'box-icon'}>
                            <Button>
                                <HeartTwoTone twoToneColor="#098777"/>
                            </Button>
                        </div>
                        <Link 
                            to={`/collections/${props.category1}/${props.category2}/${props.category3}/${Slug(props.nameProduct)}.${props.productId}`}
                            onClick={() => onClickLink(`/collections/${props.category1}/${props.category2}/${props.category3}`)}
                        >
                            <Card
                                hoverable
                                cover={<img alt='' src={props.imgUrl} />}
                            >
                                <Meta title={props.nameProduct}/>
                                <Typography.Title level={3}> {formatMoney(props.price)} vnd</Typography.Title>
                            </Card>
                        </Link>
                    </div>
                )
            }
        </>
        // <div 
        //     className="box-product"
        //     onMouseOver={ () => {if(window.innerWidth > 768) {setHover(true)}}}
        //     onMouseOut={ () => {if(window.innerWidth > 768) {setHover(false)}}}
        // >
        //     <div className={ isHover ? 'box-icon active' : 'box-icon'}>
        //         <Button>
        //             <HeartTwoTone twoToneColor="#098777"/>
        //         </Button>
        //     </div>
        //     <Link 
        //         to={`/collections/${props.category1}/${props.category2}/${props.category3}/${Slug(props.nameProduct)}.${props.productId}`}
        //         onClick={() => onClickLink(`/collections/${props.category1}/${props.category2}/${props.category3}`)}
        //     >
        //         <Card
        //             hoverable
        //             cover={<img alt='' src={props.imgUrl} />}
        //         >
        //             <Meta title={props.nameProduct}/>
        //             <Typography.Title level={3}> {formatMoney(props.price)} vnd</Typography.Title>
        //         </Card>
        //     </Link>
        // </div>
    )
}

export default Product;
import React, { useState } from 'react';
import { Col, Dropdown, Menu, Row, Divider, Badge, Button, Affix } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, MenuUnfoldOutlined, ShoppingOutlined, UserOutlined, SearchOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './Navbar.css';

//navbar desktop
const beautyMenuD = (
    <Menu  className='navbar-submenu'>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title="Face">
                        <Menu.Item>
                            <Link to='/'>Skin</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Lip</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Eyes</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title="Body">
                        <Menu.Item>
                            <Link to='/'>Hair</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Body care</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title="Skin care">
                        <Menu.Item>
                            <Link to='/'>Cleansing</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Mask park</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
    </Menu>
)
const popMenuD = (
    <Menu className='navbar-submenu'>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title='Boy Group'>
                        <Menu.Item>
                            <Link to="/">BT21</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title='Girl Group'>
                        <Menu.Item>
                            <Link to='/'>Black Pink</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Twice</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
    </Menu>
)
const dramaMenuD = (
    <Menu className='navbar-submenu'>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title='Categories'>
                        <Menu.Item>
                            <Link to='/'>Pengsoo</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Book</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
    </Menu>
)
const fashionMenuD = (
    <Menu className='navbar-submenu'>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title='Categories'>
                        <Menu.Item>
                            <Link to='/'>Top</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Bottom</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title='Brands'>
                        <Menu.Item>
                            <Link to='/'>Fila</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
    </Menu>
)
const lifeMenuD = (
    <Menu className='navbar-submenu'>
        <Menu.Item>
            <Link to='/'>
                <Menu>
                    <Menu.SubMenu title='Categories'>
                        <Menu.Item>
                            <Link to='/'>Food</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/'>Game</Link>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Link>
        </Menu.Item>
    </Menu>
)

//navbar mobile
const beautyMenuM = (
    <Menu className="nav-list_1_m">
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Face</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Skin</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Lip</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Eyes</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
        <Divider />
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Body</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Hair</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Body care</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
        <Divider />
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Skin care</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Cleansing</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Mask park</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
    </Menu>
)
const popMenuM = (
    <Menu className="nav-list_1_m">
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Boy Group</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>BT21</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
        <Divider />
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Girl Group</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Black Pink</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Twice</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
    </Menu>
)
const dramaMenuM = (
    <Menu className="nav-list_1_m">
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Categories</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Pengsoo</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Book</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
    </Menu>
)
const fashionMenuM = (
    <Menu className="nav-list_1_m">
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Categories</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Top</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Bottom</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
        <Divider />
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Brands</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Fila</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
    </Menu>
)
const lifeMenuM = (
    <Menu className="nav-list_1_m">
        <Menu.Item className="nav-list_1_m_item">
            <Link to='/'>Categories</Link>
            <p>
                <Dropdown overlay={(
                    <Menu className="nav-list_1_m">
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Food</Link>
                        </Menu.Item>
                        <Divider />
                        <Menu.Item className="nav-list_1_m_item">
                            <Link to='/'>Game</Link>
                        </Menu.Item>
                    </Menu>
                )} trigger={['click']} >
                    <DownOutlined />
                </Dropdown>
            </p>
        </Menu.Item>
    </Menu>
)

const Navbar = () => {

    const [visibleB, setVisibleB] = useState(false);
    const [visibleP, setVisibleP] = useState(false);
    const [visibleD, setVisibleD] = useState(false);
    const [visibleF, setVisibleF] = useState(false);
    const [visibleL, setVisibleL] = useState(false);

    const handleVisibleChangeB  = flag => {
        setVisibleB(flag)
    }
    const handleVisibleChangeP  = flag => {
        setVisibleP(flag)
    }
    const handleVisibleChangeD  = flag => {
        setVisibleD(flag)
    }
    const handleVisibleChangeF  = flag => {
        setVisibleF(flag)
    }
    const handleVisibleChangeL  = flag => {
        setVisibleL(flag)
    }
    //
    const [isMenuShow, setMenuShow] = useState(false);

    return (
        <Affix offsetTop={0}>
            <div className="navbar_root">
                <div className="container-fluid navbar">
                    <div className="navbar-nav_desktop">
                        <Row>
                            <Col span={24}>
                                <Menu className="nav-list">
                                    <Menu.Item className="nav-list_item">
                                        <Dropdown overlay={beautyMenuD}>
                                            <Link to='/' className="ant-dropdown-link">
                                                K-BEAUTY <DownOutlined />
                                            </Link>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item className="nav-list_item">
                                        <Dropdown overlay={popMenuD}>
                                            <Link to='/' className="ant-dropdown-link">
                                                K-POP <DownOutlined />
                                            </Link>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item className="nav-list_item">
                                        <Dropdown overlay={dramaMenuD}>
                                            <Link to='/' className="ant-dropdown-link">
                                                K-DRAMA <DownOutlined />
                                            </Link>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item className="nav-list_item">
                                        <Dropdown overlay={fashionMenuD}>
                                            <Link to='/' className="ant-dropdown-link">
                                                K-FASHION <DownOutlined />
                                            </Link>
                                        </Dropdown>
                                    </Menu.Item>
                                    <Menu.Item className="nav-list_item">
                                        <Dropdown overlay={lifeMenuD}>
                                            <Link to='/' className="ant-dropdown-link">
                                                K-LIFE <DownOutlined />
                                            </Link>
                                        </Dropdown>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                        </Row>
                    </div>
                    <div className='navbar_mobile_tools'>
                        <Row>
                            <Col span={12}>
                                <div className="box-tool">
                                    <Button onClick={ () => setMenuShow(!isMenuShow)}>
                                        {
                                            isMenuShow ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
                                        }
                                    </Button>
                                </div>
                            </Col>
                            <Col span={12} className="tools_user">
                                <div className="box-tool">
                                    <Button>
                                        <SearchOutlined />
                                    </Button>
                                </div>
                                <div className="box-tool" style={{margin: '0 15px'}}>
                                    <Badge count={1}>
                                        <Button>
                                            <ShoppingOutlined />
                                        </Button>
                                    </Badge>
                                </div>
                                <div className="box-tool">
                                    <Button>
                                        <UserOutlined />
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={`${isMenuShow ? 'navbar-nav_mobile active' : 'navbar-nav_mobile'}`}>
                        <Menu className='nav-list'>
                            <Menu.Item  className='nav-list_item'>
                                <Link to='/'>K-BEAUTY</Link>
                                <p>
                                    <Dropdown 
                                        overlay={beautyMenuM} 
                                        trigger={['click']}
                                        visible={visibleB} 
                                        onVisibleChange={handleVisibleChangeB}
                                    >
                                        <DownOutlined />
                                    </Dropdown>
                                </p>
                            </Menu.Item>
                            <Divider />
                            <Menu.Item  className='nav-list_item'>
                                <Link to='/'>K-POP</Link>
                                <p>
                                    <Dropdown 
                                        overlay={popMenuM} 
                                        trigger={['click']}
                                        visible={visibleP} 
                                        onVisibleChange={handleVisibleChangeP}
                                    >
                                        <DownOutlined />
                                    </Dropdown>
                                </p>
                            </Menu.Item>
                            <Divider />
                            <Menu.Item  className='nav-list_item'>
                                <Link to='/'>K-DRAMA</Link>
                                <p>
                                    <Dropdown 
                                        overlay={dramaMenuM} 
                                        trigger={['click']}
                                        visible={visibleD} 
                                        onVisibleChange={handleVisibleChangeD}
                                    >
                                        <DownOutlined />
                                    </Dropdown>
                                </p>
                            </Menu.Item>
                            <Divider />
                            <Menu.Item  className='nav-list_item'>
                                <Link to='/'>K-FASHION</Link>
                                <p>
                                    <Dropdown 
                                        overlay={fashionMenuM} 
                                        trigger={['click']}
                                        visible={visibleF} 
                                        onVisibleChange={handleVisibleChangeF}
                                    >
                                        <DownOutlined />
                                    </Dropdown>
                                </p>
                            </Menu.Item>
                            <Divider />
                            <Menu.Item  className='nav-list_item'>
                                <Link to='/'>K-LIFE</Link>
                                <p>
                                    <Dropdown 
                                        overlay={lifeMenuM} 
                                        trigger={['click']}
                                        visible={visibleL} 
                                        onVisibleChange={handleVisibleChangeL}
                                    >
                                        <DownOutlined />
                                    </Dropdown>
                                </p>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        </Affix>
    )
}

export default Navbar;
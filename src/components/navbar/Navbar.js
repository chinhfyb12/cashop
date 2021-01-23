import React, { useState } from 'react';
import { Col, Dropdown, Menu, Row, Divider, Badge, Button, Affix } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, MenuUnfoldOutlined, ShoppingOutlined, UserOutlined, SearchOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './Navbar.css';
import Slug from '../../Slug'

//navbar desktop

const submenuBeauty = [
    {
        title: 'Face',
        sub: ['Skin', 'Lip', 'Eyes']
    },
    {
        title: 'Body',
        sub: ['Hair', 'Body care']
    },
    {
        title: 'Skin care',
        sub: ['Cleansing', 'Mask park']
    }
]
const submenuPop = [
    {
        title: 'Boy Group',
        sub: ['BT21']
    },
    {
        title: 'Girl Group',
        sub: ['Black Pink', 'Twice']
    },
]
const submenuDrama = [
    {
        title: 'Categories',
        sub: ['Pengsoo', 'Book']
    },
]
const submenuFashion = [
    {
        title: 'Categories',
        sub: ['Top', 'Bottom']
    },
    {
        title: 'Brands',
        sub: ['Fila']
    },
]
const submenuLife = [
    {
        title: 'Categories',
        sub: ['Food', 'Game']
    },
]

const beautyMenuD = (
    <Menu  className='navbar-submenu'>
        {
            submenuBeauty.map((menu, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={`/collections/k-beauty/${Slug(menu.title)}`}>
                            <Menu>
                                <Menu.SubMenu title={menu.title}>
                                    {
                                        menu.sub.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    <Link to={`/collections/k-beauty/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.SubMenu>
                            </Menu>
                        </Link>
                    </Menu.Item>
                )
            })
        }
    </Menu>
)
const popMenuD = (
    <Menu className='navbar-submenu'>
        {
            submenuPop.map((menu, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={`/collections/k-pop/${Slug(menu.title)}`}>
                            <Menu>
                                <Menu.SubMenu title={menu.title}>
                                    {
                                        menu.sub.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    <Link to={`/collections/k-pop/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.SubMenu>
                            </Menu>
                        </Link>
                    </Menu.Item>
                )
            })
        }
    </Menu>
)
const dramaMenuD = (
    <Menu className='navbar-submenu'>
        {
            submenuDrama.map((menu, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={`/collections/k-drama/${Slug(menu.title)}`}>
                            <Menu>
                                <Menu.SubMenu title={menu.title}>
                                    {
                                        menu.sub.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    <Link to={`/collections/k-drama/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.SubMenu>
                            </Menu>
                        </Link>
                    </Menu.Item>
                )
            })
        }
    </Menu>
)
const fashionMenuD = (
    <Menu className='navbar-submenu'>
        {
            submenuFashion.map((menu, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={`/collections/k-fashion/${Slug(menu.title)}`}>
                            <Menu>
                                <Menu.SubMenu title={menu.title}>
                                    {
                                        menu.sub.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    <Link to={`/collections/k-fashion/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.SubMenu>
                            </Menu>
                        </Link>
                    </Menu.Item>
                )
            })
        }
    </Menu>
)
const lifeMenuD = (
    <Menu className='navbar-submenu'>
        {
            submenuLife.map((menu, index) => {
                return (
                    <Menu.Item key={index}>
                        <Link to={`/collections/k-life/${Slug(menu.title)}`}>
                            <Menu>
                                <Menu.SubMenu title={menu.title}>
                                    {
                                        menu.sub.map((item, index) => {
                                            return (
                                                <Menu.Item key={index}>
                                                    <Link to={`/collections/k-life/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.SubMenu>
                            </Menu>
                        </Link>
                    </Menu.Item>
                )
            })
        }
    </Menu>
)

//navbar mobile
const beautyMenuM = (
    <Menu className="nav-list_1_m">
        {
            submenuBeauty.map((menu, index) => {
                return (
                    <>
                        <Menu.Item key={index} className="nav-list_1_m_item">
                            <Link to={`/collections/k-beauty/${Slug(menu.title)}`}>{menu.title}</Link>
                            <p>
                                <Dropdown overlay={(
                                    <Menu className="nav-list_1_m">
                                        {
                                            menu.sub.map((item, index) => {
                                                return (
                                                    <Menu.Item key={index} className="nav-list_1_m_item">
                                                        <Link to={`/collections/k-beauty/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu>
                                )} trigger={['click']} >
                                    <DownOutlined />
                                </Dropdown>
                            </p>
                        </Menu.Item>
                        {
                            index < (submenuBeauty.length - 1) ? <Divider /> : ''
                        }
                    </>
                )
            })
        }
    </Menu>
)
const popMenuM = (
    <Menu className="nav-list_1_m">
        {
            submenuPop.map((menu, index) => {
                return (
                    <>
                        <Menu.Item key={index} className="nav-list_1_m_item">
                            <Link to={`/collections/k-pop/${Slug(menu.title)}`}>{menu.title}</Link>
                            <p>
                                <Dropdown overlay={(
                                    <Menu className="nav-list_1_m">
                                        {
                                            menu.sub.map((item, index) => {
                                                return (
                                                    <Menu.Item key={index} className="nav-list_1_m_item">
                                                        <Link to={`/collections/k-pop/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu>
                                )} trigger={['click']} >
                                    <DownOutlined />
                                </Dropdown>
                            </p>
                        </Menu.Item>
                        {
                            index < (submenuPop.length - 1) ? <Divider /> : ''
                        }
                    </>
                )
            })
        }
    </Menu>
)
const dramaMenuM = (
    <Menu className="nav-list_1_m">
        {
            submenuDrama.map((menu, index) => {
                return (
                    <>
                        <Menu.Item key={index} className="nav-list_1_m_item">
                            <Link to={`/collections/k-drama/${Slug(menu.title)}`}>{menu.title}</Link>
                            <p>
                                <Dropdown overlay={(
                                    <Menu className="nav-list_1_m">
                                        {
                                            menu.sub.map((item, index) => {
                                                return (
                                                    <Menu.Item key={index} className="nav-list_1_m_item">
                                                        <Link to={`/collections/k-drama/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu>
                                )} trigger={['click']} >
                                    <DownOutlined />
                                </Dropdown>
                            </p>
                        </Menu.Item>
                        {
                            index < (submenuDrama.length - 1) ? <Divider /> : ''
                        }
                    </>
                )
            })
        }
    </Menu>
)
const fashionMenuM = (
    <Menu className="nav-list_1_m">
        {
            submenuFashion.map((menu, index) => {
                return (
                    <>
                        <Menu.Item key={index} className="nav-list_1_m_item">
                            <Link to={`/collections/k-fashion/${Slug(menu.title)}`}>{menu.title}</Link>
                            <p>
                                <Dropdown overlay={(
                                    <Menu className="nav-list_1_m">
                                        {
                                            menu.sub.map((item, index) => {
                                                return (
                                                    <Menu.Item key={index} className="nav-list_1_m_item">
                                                        <Link to={`/collections/k-fashion/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu>
                                )} trigger={['click']} >
                                    <DownOutlined />
                                </Dropdown>
                            </p>
                        </Menu.Item>
                        {
                            index < (submenuFashion.length - 1) ? <Divider /> : ''
                        }
                    </>
                )
            })
        }
    </Menu>
)
const lifeMenuM = (
    <Menu className="nav-list_1_m">
        {
            submenuLife.map((menu, index) => {
                return (
                    <>
                        <Menu.Item key={index} className="nav-list_1_m_item">
                            <Link to={`/collections/k-life/${Slug(menu.title)}`}>{menu.title}</Link>
                            <p>
                                <Dropdown overlay={(
                                    <Menu className="nav-list_1_m">
                                        {
                                            menu.sub.map((item, index) => {
                                                return (
                                                    <Menu.Item key={index} className="nav-list_1_m_item">
                                                        <Link to={`/collections/k-life/${Slug(menu.title)}/${Slug(item)}`}>{item}</Link>
                                                    </Menu.Item>
                                                )
                                            })
                                        }
                                    </Menu>
                                )} trigger={['click']} >
                                    <DownOutlined />
                                </Dropdown>
                            </p>
                        </Menu.Item>
                        {
                            index < (submenuLife.length - 1) ? <Divider /> : ''
                        }
                    </>
                )
            })
        }
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
    const categories = [
        {
            name: 'k-beauty',
            submenuD: beautyMenuD,
            submenuM: beautyMenuM,
            visible: visibleB,
            action: handleVisibleChangeB
        },
        {
            name: 'k-pop',
            submenuD: popMenuD,
            submenuM: popMenuM,
            visible: visibleP,
            action: handleVisibleChangeP
        },
        {
            name: 'k-drama',
            submenuD: dramaMenuD,
            submenuM: dramaMenuM,
            visible: visibleD,
            action: handleVisibleChangeD
        },
        {
            name: 'k-fashion',
            submenuD: fashionMenuD,
            submenuM: fashionMenuM,
            visible: visibleF,
            action: handleVisibleChangeF
        },
        {
            name: 'k-life',
            submenuD: lifeMenuD,
            submenuM: lifeMenuM,
            visible: visibleL,
            action: handleVisibleChangeL
        },
    ]
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
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <Menu.Item key={index} className="nav-list_item">
                                                    <Dropdown overlay={category.submenuD}>
                                                        <Link to={`/collections/${category.name}`} className="ant-dropdown-link">
                                                            { category.name.toUpperCase() } <DownOutlined />
                                                        </Link>
                                                    </Dropdown>
                                                </Menu.Item>
                                            )
                                        })
                                    }
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
                            {
                                categories.map((category, index) => {
                                    return (
                                        <>
                                            <Menu.Item className='nav-list_item'>
                                                <Link to={`/collections/${Slug(category.name)}`}>{category.name.toUpperCase()}</Link>
                                                <p>
                                                    <Dropdown 
                                                        overlay={category.submenuM} 
                                                        trigger={['click']}
                                                        visible={category.visible} 
                                                        onVisibleChange={category.action}
                                                    >
                                                        <DownOutlined />
                                                    </Dropdown>
                                                </p>
                                            </Menu.Item>
                                            {
                                                index < categories.length - 1 ? <Divider /> : ''
                                            }
                                        </>
                                    )
                                })
                            }
                        </Menu>
                    </div>
                </div>
            </div>
        </Affix>
    )
}

export default Navbar;
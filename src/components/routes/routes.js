import React from 'react'
import Home from '../../pages/home/Home'
import Products from '../../pages/products/Products'
import Login from '../../pages/login/Login'
import SignUp from '../../pages/signup/SignUp'
import ProductDetail from '../../pages/productDetail/ProductDetail'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/collections',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/face',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/face/skin',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/face/lip',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/face/eyes',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/body',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/body/hair',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/body/body-care',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/skin-care',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/skin-care/cleansing',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-beauty/skin-care/mask-park',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-pop',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-pop/boy-group',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-pop/boy-group/bt21',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-pop/girl-group',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-pop/girl-group/black-pink',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-pop/girl-group/twice',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-drama',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-drama/categories',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-drama/categories/pengsoo',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-drama/categories/book',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-fashion',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-fashion/categories',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-fashion/categories/top',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-fashion/categories/bottom',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-fashion/brands',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-fashion/brands/fila',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-life',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-life/categories',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-life/categories/food',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/collections/k-life/categories/game',
        exact: true,
        main: () => <Products />
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/sign-up',
        exact: true,
        main: () => <SignUp />
    },
    {
        path: '/collections/detail',
        exact: true,
        main: () => <ProductDetail />
    },
]

export default routes;
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import routes from './components/routes/routes';
import ProductDetail from './pages/productDetail/ProductDetail'

const RouterURL = () => {

    const pathProduct = useSelector(state => state.sendPathProduct)

    function showRouterURL(routes) {
        let result = null;
        if(routes) {
            result = routes.map(item => {
                return (
                    <Route key={item.path} path={item.path} exact={item.exact}>
                        { item.main }
                    </Route>
                )
            })
        }
        return result;
    }

    return(
        <Switch>
            { showRouterURL(routes) }
            <Route path={`${pathProduct}/:slug.:id`} exact={true}>
                <ProductDetail />
            </Route>
        </Switch>
    )
}
export default RouterURL;
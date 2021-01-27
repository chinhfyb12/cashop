import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import showCartModal from '../reducers/showCartReducer'
import showSearch from '../reducers/showSearchReducer'
import sendPathProduct from '../reducers/sendPathProductReducer'
import productsInCart from '../reducers/sendProductsInCartReducer';

const rootReducer = combineReducers({
    showCartModal,
    showSearch,
    sendPathProduct,
    productsInCart,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import showCartModal from '../reducers/showCartReducer'
import showSearch from '../reducers/showSearchReducer'
import sendPathProduct from '../reducers/sendPathProductReducer'

const rootReducer = combineReducers({
    showCartModal,
    showSearch,
    sendPathProduct,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import showCartModal from '../reducers/showCartReducer'
import showSearch from '../reducers/showSearchReducer'

const rootReducer = combineReducers({
    showCartModal,
    showSearch
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
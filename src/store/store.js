import showCartModel from '../reducers/showCartReducer'

const redux = require('redux')

const rootReducer = redux.combineReducers({
    showCartModel,
});

const store = redux.createStore(rootReducer)

export default store;
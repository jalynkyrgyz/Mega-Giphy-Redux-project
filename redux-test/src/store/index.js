import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import  thunkMiddleware  from 'redux-thunk';

const rootReducer = combineReducers({})
export const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
),
)
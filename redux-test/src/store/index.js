import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { categoryReducer } from './category'

const rootReducer = combineReducers({ categories: categoryReducer })
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

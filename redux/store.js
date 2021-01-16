import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk"
import createDebounce from "redux-debounced"
const middlewares = [thunk, createDebounce()]

const composeEnhancers = compose
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

export { store }

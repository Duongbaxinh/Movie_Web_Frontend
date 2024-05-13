import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { createStoreHook } from 'react-redux';
import rootReducer from './reducer/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;

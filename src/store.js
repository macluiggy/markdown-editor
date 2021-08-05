import rootReducer from './reducers'
import initalState from './reducers/initial-markdown'
import { createStore } from 'redux';

export default createStore(rootReducer);
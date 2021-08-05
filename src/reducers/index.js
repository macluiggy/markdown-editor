import { combineReducers } from 'redux';
import initalMarkdownnReducer from './initialMarkdownReducer';
import maxMinReducer from './maxMinReducer.js'

export default combineReducers({
	state1: initalMarkdownnReducer,
	maxMinReducer: maxMinReducer,
})
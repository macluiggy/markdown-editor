import { combineReducers } from 'redux';
import initalMarkdownnReducer from './initialMarkdownReducer';
import maxMinReducer from './maxMinReducer.js'
import maxMinPreviewReducer from './maxMinPreviewReducer'

export default combineReducers({
	state1: initalMarkdownnReducer,
	maxMinReducer: maxMinReducer,
	maxMinPreviewReducer: maxMinPreviewReducer,
})
import initalMarkdownn from './initial-markdown'
const initialState = {
	text: initalMarkdownn,
}
const UPDATE_TEXT = 'UPDATE_TEXT';

export default function initalMarkdownnReducer (state = initialState, action) {
	//console.log(state.text)
	switch (action.type) {
		case UPDATE_TEXT:
			return {
				text: action.newText
			}
		default:
			return state;
	}
}
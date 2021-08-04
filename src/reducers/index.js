import initalMarkdownn from './initial-markdown'
const initialState = {
	text: initalMarkdownn,
}
const UPDATE_TEXT = 'UPDATE_TEXT';
//actions
export const updateTextAction = newText => {
	return {
		type: UPDATE_TEXT,
		newText: newText,
	}
}

export const reducer = (state = initialState, action) => {
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

export const mapStateToProps = state => {
	return {
		state: state,
	}
}
export const mapDispatchToProps = dispatch => {
	return {
		updateText: newText => dispatch(updateTextAction(newText)),
	}
}

const UPDATE_TEXT = 'UPDATE_TEXT';
export const mapDispatchToProps = dispatch => {
	return {
		updateText: newText => dispatch(updateTextAction(newText)),
	}
}
export const mapStateToProps = state => {
	return {
		state: state,
	}
}
const updateTextAction = newText => {
	return {
		type: UPDATE_TEXT,
		newText: newText,
	}
}
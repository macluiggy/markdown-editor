const UPDATE_TEXT = 'UPDATE_TEXT';

const updateTextAction = newText => {
	return {
		type: UPDATE_TEXT,
		newText: newText,
	}
}

const maximizeAction = () => {
	return {
		type: 'MAXIMIZE',
		absolute: true,
	}
}
const minimizeAction = () => {
	return {
		type: 'MINIMIZE',
		absolute: false,
	}
}
export const mapDispatchToProps = dispatch => {
	return {
		updateText: newText => dispatch(updateTextAction(newText)),
		maximize: () => dispatch(maximizeAction()),
		minimize: () => dispatch(minimizeAction()),
	}
}
export const mapStateToProps = state => {
	return {
		state: state,
	}
}
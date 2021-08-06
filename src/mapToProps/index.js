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
		maximizePreview: () => dispatch({ type: 'MAXIMIZE2', absolute2: true}),
		minimizePreview: () => dispatch({ type: 'MINIMIZE2', absolute2: false}),
	}
}
export const mapStateToProps = state => {
	return {
		state: state,
	}
}
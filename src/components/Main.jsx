import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
//redux
const initialState = {
	text: 'hola',
}
const ON_CHANGE = 'ON_CHANGE';
//actions
const updateTextAction = (newText) => {
	return {
		type: ON_CHANGE,
		text: newText,
	}
}

const reducer = (state = initialState, action) => {
	//console.log(state.text)
	switch (action.type) {
		case ON_CHANGE:
			return {
				...state,
			}
		default:
			return state;
	}
}
export const store = createStore(reducer);
//react
const Main = ({ state, updateText }) => {
	const { text } = state;
	console.log(state)

	const onChangeEditor = e => {
		updateText(e.target.value)
	}
	return (
		<div>
			<div>
				<textarea 
				name="text-editor" 
				id="editor"
				value={text}
				cols="30" 
				rows="10"
				onChange={onChangeEditor} >
					
				</textarea>
			</div>
			<div id='preview' >
				
			</div>
		</div>
		)
}

//react-redux
const mapStateToProps = state => {
	return {
		state: state,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		updateText: (newText) => {
			dispatch(updateTextAction(newText))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
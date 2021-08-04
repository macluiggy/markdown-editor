import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import marked from 'marked';
//redux
const initialState = {
	text: 'hola',
}
const UPDATE_TEXT = 'UPDATE_TEXT';
//actions
const updateTextAction = newText => {
	return {
		type: UPDATE_TEXT,
		newText: newText,
	}
}

const reducer = (state = initialState, action) => {
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
export const store = createStore(reducer);
//react
const Main = ({ state, updateText }) => {
	const { text } = state;
	console.log(state)
	const onChangeText = e => {
		updateText(e.target.value)
	}
	const renderText = text => {
		const __html = marked(text, {sensitize: true});
		return {__html}
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
				onChange={onChangeText} >
					
				</textarea>
			</div>
			<div id='preview' >
				<div dangerouslySetInnerHTML={renderText(text)}></div>
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
		updateText: newText => dispatch(updateTextAction(newText)),
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
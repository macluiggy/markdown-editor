import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
//redux
const initialState = {
	text: 'hola',
}
//actions
const HOLA = 'HOLA';

const reducer = (state = initialState, action) => {
	//console.log(state.text)
	switch (action.type) {
		case HOLA:
			return {
				...state,
			}
		default:
			return state;
	}
}
export const store = createStore(reducer);
//react
const Main = ({ state }) => {
	const { text } = state;
	console.log(state)
	return (
		<div>
			<div>
				<textarea 
				name="text-editor" 
				id="editor"
				value={text}
				cols="30" 
				rows="10" >
					
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
		fn: () => 'hola',
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
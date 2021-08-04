import React from 'react';
import Redux, { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
//redux
const initialState = {
	test: `
	<h1>Title</h1>
	<h2>Subtitle</h2>
	`
}
const Main = () => {
	return (
		<div>
			<div>
				<textarea 
				name="text-editor" 
				id="editor" 
				cols="30" 
				rows="10" >
					
				</textarea>
			</div>
			<div id='preview' >
				
			</div>
		</div>
		)
}

export default Main
import React from 'react';
import '../sass/Main.scss'
import marked from 'marked';
//import { mapStateToProps, mapDispatchToProps } from '../reducers/initialMarkdownReducer.js'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Editor from './Editor';
import store from '../store'
//mapToProps
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'
console.log(store.getState())
//redux

//react
const Main = ({ state, updateText }) => {
	const { text } = state.state1;
	//console.log(state)
//console.log(text)
	const onChangeText = e => {
		updateText(e.target.value)
	}
	const renderText = text => {
		const __html = marked(text, {sensitize: true});
		return { __html }
	}

	return (
		<main>
			<Editor
			 text={text}
			 onChangeText={onChangeText} />
			<div className='preview_container' >
				<div id='preview' dangerouslySetInnerHTML={renderText(text)}></div>
			</div>
		</main>
		)
}

//react-redux
export default connect(mapStateToProps, mapDispatchToProps)(Main)
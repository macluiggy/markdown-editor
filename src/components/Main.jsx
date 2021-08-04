import React from 'react';
import '../sass/Main.scss'
import marked from 'marked';
import { reducer, mapStateToProps, mapDispatchToProps } from '../reducers'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Editor from './Editor';

//redux
export const store = createStore(reducer);

//react
const Main = ({ state, updateText }) => {
	const { text } = state;
	//console.log(state)

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
			<div id='preview' >
				<div dangerouslySetInnerHTML={renderText(text)}></div>
			</div>
		</main>
		)
}

//react-redux
export default connect(mapStateToProps, mapDispatchToProps)(Main)
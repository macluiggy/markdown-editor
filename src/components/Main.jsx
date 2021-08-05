import React from 'react';
import '../sass/Main.scss'
import marked from 'marked';
import { mapStateToProps, mapDispatchToProps } from '../reducers/initialMarkdownReducer.js'
import rootReducer from '../reducers/'
import { createStore } from 'redux';
import { connect } from 'react-redux';
import Editor from './Editor';
import initalState from '../reducers/initial-markdown.js'

//redux
export const store = createStore(rootReducer, initalState);

//react
const Main = ({ state1, updateText }) => {
	console.log(state1)

	const onChangeText = e => {
		updateText(e.target.value)
	}
	const renderText = text => {
	}

	return (
		<main>
		</main>
		)
}

//react-redux
export default connect(mapStateToProps, mapDispatchToProps)(Main)
import React from 'react';
import '../sass/Main.scss'
import marked from 'marked';
import { connect } from 'react-redux';
import Editor from './Editor';
//mapToProps
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'
import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs';
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
				<div className='preview'>
					<span className="iconify react-logo" data-icon="logos:react" data-inline="false"></span>
					 Preview
					<div className='max_mix_container'>
						<BsArrowsAngleContract />
					</div>
				</div>
				<div id='preview' dangerouslySetInnerHTML={renderText(text)}></div>
			</div>
		</main>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
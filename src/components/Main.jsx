import React from 'react';
import '../sass/Main.scss'
import marked from 'marked';
import { connect } from 'react-redux';
import Editor from './Editor';
//mapToProps
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/'
import { BsArrowsAngleExpand, /*BsArrowsAngleContract*/ } from 'react-icons/bs';
//redux

//react
const Main = ({ state, updateText, maximizePreview, minimizePreview, maxMinPreviewReducer }) => {
	const { text } = state.state1;
	const { absolute2 } = state.maxMinPreviewReducer;
	//console.log(state)
//console.log(text)
	const onChangeText = e => {
		updateText(e.target.value)
	}
	const renderText = text => {
		const __html = marked(text, {sensitize: true});
		return { __html }
	}
	const mxmnPreview = () => {
		console.log('max min')
		return absolute2 ? maximizePreview() : minimizePreview();
	}

	return (
		<main>
			<Editor
			 text={text}
			 onChangeText={onChangeText} />
			<div className='preview_container' >
			<button onClick={() => {
				console.log('hdhdhd')
			}}>click</button>
				<div className='preview' style={{
					position: absolute2 ? 'absolute' : 'relative',
				}}>
					<span className="iconify react-logo" data-icon="logos:react" data-inline="false"></span>
					 Preview
					<div className='max_mix_container2'  >
						<BsArrowsAngleExpand />
					</div>
				</div>
				<div id='preview' dangerouslySetInnerHTML={renderText(text)}></div>
			</div>
		</main>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
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
		if (absolute2) {
			minimizePreview()
		} else {
			maximizePreview()
		}
	}

	return (
		<main>
			<Editor
			 text={text}
			 onChangeText={onChangeText} />
			<div className='preview_container' style={{
					position: absolute2 ? 'relative' : 'relative',
					right: absolute2 && '0%',
					bottom: absolute2 && '250px',
					height:  absolute2 && '90vh',
					width: absolute2 && '93%',
					margin: absolute2 && '1em',
					zIndex: absolute2 && 20

				}} >
				<div className='preview' >
					<span className="iconify react-logo" data-icon="logos:react" data-inline="false"></span>
					 Preview
					<div className='max_mix_container2' onClick={mxmnPreview} >
						{absolute2
							? <BsArrowsAngleContract />
							: <BsArrowsAngleExpand />}
					</div>
				</div>
				<div id='preview' dangerouslySetInnerHTML={renderText(text)}></div>
			</div>
		</main>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
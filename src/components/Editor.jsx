import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/';
//import { useState } from 'react';
import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs';


const Editor = ({ text, onChangeText, state, maximize, minimize }) => {
	const { absolute } = state.maxMinReducer;
	//console.log(state)
	const mxmn = () => {
		//console.log(`log message`)
  	 	return absolute ? minimize() : maximize()
	}
	return (
			<div className='editor_container' style={{
				position: absolute ? 'absolute' : 'relative',
				left: absolute ? '5%' : 0,
				width: absolute && '90%',
				height: absolute && '95vh',
				zIndex: absolute ? 10 : 0,
			}} >
				<div className='editor'>
					<span className="iconify react-logo" data-icon="logos:react" data-inline="false"></span>
					 Editor
					 <div className='max_mix_container' onClick={mxmn}>
						{absolute 
							? <BsArrowsAngleContract />
							: <BsArrowsAngleExpand />}
					 </div>
				 </div>
				<textarea 
				name="text-editor" 
				id="editor"
				value={text}
				cols="30" 
				rows="10"
				onChange={onChangeText}
				style={{
					height: absolute && '85vh',
				}} >
				</textarea>
			</div>
		)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)

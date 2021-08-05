import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../mapToProps/';
import { useState } from 'react';

const Editor = ({ text, onChangeText, state, maximize, minimize }) => {
	const { absolute } = state.maxMinReducer;
	const [icon, setIcon] = useState("mdi:fullscreen")
	//console.log(state)
	const mxmn = () => {
		//console.log(`holdddddda`)"mdi:fullscreen"
		if(absolute) {
			setIcon("feather:minimize")
		} else {
			setIcon("mdi:fullscreen")
		}
  	 	return absolute ? minimize() : maximize()
	}
	return (
			<div className='editor_container' style={{
				position: absolute ? 'absolute' : 'relative',
				left: absolute ? '5%' : 0,
				width: absolute && '90%',
				height: absolute && '95vh',
			}} >
				<div className='editor'>
					<span className="iconify react-logo" data-icon="logos:react" data-inline="false"></span>
					 Editor
					 <div className='max_mix_container' onClick={mxmn}>
						<span
						  className="iconify max"
						  data-icon={icon} >
						</span>
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

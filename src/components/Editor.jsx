import max from '../images/maximize.svg'
const Editor = ({ text, onChangeText }) => {
	return (
			<div className='editor_container' style={{
				position: 'absolute',
			}} >
				<div className='editor' >
					<span class="iconify react-logo" data-icon="logos:react" data-inline="false"></span>
					 Editor
					 <span
					  class="iconify max"
					  data-icon="mdi:fullscreen"
					  onClick={() => ''} ></span>
				 </div>
				<textarea 
				name="text-editor" 
				id="editor"
				value={text}
				cols="30" 
				rows="10"
				onChange={onChangeText} >
				</textarea>
			</div>
		)
}

export default Editor
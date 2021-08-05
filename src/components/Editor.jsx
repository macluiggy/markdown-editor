import logo from '../logo.svg'

const Editor = ({ text, onChangeText }) => {
	return (
			<div className='editor_container'>
				<div className='editor' ><img src={logo} alt="" /> Editor</div>
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
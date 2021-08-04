export default ({ text, onChangeText }) => {
	return (
			<div>
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
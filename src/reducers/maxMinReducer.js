const initialState = {
	absolute: false,
}
const MAXIMIZE = 'MAXIMIZE';
const MINIMIZE = 'MINIMIZE';

export default function maxMinReducer(state = initialState, action) {
	switch (action.type) {
		case MAXIMIZE:
			return {
				absolute: action.absolute,
			}
		case MINIMIZE: 
			return {
				absolute: action.absolute,
			}
		default:
			return state;
	}
}
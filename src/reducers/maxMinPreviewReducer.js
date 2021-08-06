
const initialState = {
	absolute: false,
}
const MAXIMIZE2 = 'MAXIMIZE2';
const MINIMIZE2 = 'MINIMIZE2';

export default function maxMinReducer(state = initialState, action) {
	switch (action.type) {
		case MAXIMIZE2:
			return {
				absolute2: action.absolute2,
			}
		case MINIMIZE2: 
			return {
				absolute2: action.absolute2,
			}
		default:
			return state;
	}
}
export default (state = {}, action) => {
	switch (action.type) {
		case 'saveUserAllData':
			return action.payload;
		default:
			return state;
	}
}
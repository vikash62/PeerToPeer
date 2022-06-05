export default (state = {}, action) => {
	switch (action.type) {
		case 'save':
			return action.payload;
		case 'savecompletedata':
			return action.payload;
		default:
			return state;
	}
}
export default (state = [], action) => {
	switch (action.type) {
		case 'deleteRow':
			return action.payload;
		default:
			return state;
	}
}
export default (state = [], action) => {
	switch (action.type) {
		case 'saveCategories':
			return action.payload;
		default:
			return state;
	}
}
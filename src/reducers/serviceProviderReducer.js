
export default (state = [], action) => {
	switch (action.type) {
		case 'saveServiceProviders':
			return action.payload;
		default:
			return state;
	}
}


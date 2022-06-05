export default (state = null, action) => {
	// console.warn(JSON.stringify(action.payload));
	switch (action.type) {
		case 'MobileNo':  
			return action.payload;
		default:
			return state;
	}
}
export default (state = null, action) => {
  
	switch (action.type) {
    
		case 'increase':  
			return action.payload;
		default:
			return state;
	}
}
export default (state = null, action) => {
  //console.warn(action);
	switch (action.type) {
    
		case 'update':  
			return action.payload;
		default:
			return state;
	}
}
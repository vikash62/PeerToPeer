export default (state = null, action) => {
  
	switch (action.type) {
    
		case 'archiveincrease':  
			return action.payload;
		default:
			return state;
	}
}
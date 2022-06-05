export default (state = [], action) => {
    switch (action.type) {
        case 'Dummy':
            return action.payload;
        default:
            return state;
    }
}
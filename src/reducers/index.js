import { combineReducers } from 'redux';
// import dummyReducer from './dummyReducer';
// import signUpReducer from './signUpReducer';
// import categoriesReducer from './categoriesReducer';
// import serviceProviderReducer from './serviceProviderReducer';
// import userAllDataReducer from './userAllDataReducer';
// import deleteRowReducer from './deleteRowReducer';
 import MobileNo from './MobileNo';
// import jobcount from './jobcount'
// import archivecount from './archivecount'
// import updateRating from './updateRating'
import LoginData from './LoginData';

export default combineReducers({
    // dummyData: dummyReducer,
    // signUpData: signUpReducer,
    // categories: categoriesReducer,
    // serviceProviders: serviceProviderReducer,
    // userAllData: userAllDataReducer,
    // deleteRowId: deleteRowReducer,
    // undoRow: undoRow,
    // jobcount:jobcount,
    // archivecount:archivecount,
    MobileNo:MobileNo,
    LoginData:LoginData,
});


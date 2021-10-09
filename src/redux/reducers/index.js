import {combineReducers} from "redux";
import userReducer from './user-reducer';
import commonReducer from './common-reducer';
const allReducers = {
    user: userReducer,
    common: commonReducer,
}
const rootReducer = combineReducers(allReducers);
export default rootReducer;

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import carReducer from './carReducer';

const rootReducers = combineReducers({authReducer,errorReducer,carReducer})

export default rootReducers
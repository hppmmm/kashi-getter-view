import { combineReducers } from "redux";
import kashiElementReducer from "./kashiElementReducer";
import formElementReducer from "./formElementReducer";

const reducers = combineReducers({kashiElementReducer,formElementReducer});
export default reducers;

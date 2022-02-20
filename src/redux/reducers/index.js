import apiCalls from "./apiCalls";
import apiCallsGetLang from "./apiCallsGetLang";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    apiCalls : apiCalls,
    apiCallsGetLang : apiCallsGetLang 
})

export default rootReducer;
import { combineReducers } from "redux";

import APIsReducer from "./APIs data/APIsReducer";


const rootReducer = combineReducers({
    APIsState: APIsReducer,
    
});

export default rootReducer;
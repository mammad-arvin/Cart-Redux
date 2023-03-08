import { combineReducers } from "redux";

import APIsReducer from "./APIs data/APIsReducer";
import filterReducer from "./categoryFilter/filterReducer";

const rootReducer = combineReducers({
    APIsState: APIsReducer,
    filetrState:filterReducer,
});

export default rootReducer;
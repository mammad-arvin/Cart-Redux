import { combineReducers } from "redux";

import APIsReducer from "./APIs data/APIsReducer";
import filterReducer from "./categoryFilter/filterReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    APIsState: APIsReducer,
    filetrState: filterReducer,
    cartState: cartReducer,
});

export default rootReducer;

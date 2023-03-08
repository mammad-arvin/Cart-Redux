const initialState = {
    APIs: [],
    err: "",
};

const APIsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return { ...state, APIs: action.payload };
        case "FETCH_Failure":
            return { ...state, err: action.payload };
        default:
            return state;
    }
};

export default APIsReducer;
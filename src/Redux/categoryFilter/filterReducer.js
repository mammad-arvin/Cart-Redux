const initialState = {
    categoreFilter: "all",
};
const filterReducer = (state=initialState, action) => {
    switch (action.type) {
        case "Electronics":
            return { ...state, categoreFilter: "Electronics" };
        case "Fragrances":
            return { ...state, categoreFilter: "Fragrances" };
        case "Clothes":
            return { ...state, categoreFilter: "Clothes" };
        case "Shoes":
            return { ...state, categoreFilter: "Shoes" };
        case "Others":
            return { ...state, categoreFilter: "Others" };
        case "all":
            return { ...state, categoreFilter: "all" };
        default:
            return state;
    }
};

export default filterReducer;

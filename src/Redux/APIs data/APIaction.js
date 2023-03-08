import axios from "axios";

const fetchSuccess = (data) => {
    return { type: "FETCH_SUCCESS", payload: [...data] };
};
const fetchFailure = (err) => {
    return { type: "FETCH_Failure", payload: err };
};

export const getDataFromAPIs = () => {
    return (dispatch) => {
        axios.all([
            axios.get("https://fakestoreapi.com/products"),
            axios.get("https://dummyjson.com/products"),
            // axios.get('https://api.escuelajs.co/api/v1/products'),
        ])
        .then((result) => {
            console.log(result);
            dispatch(fetchSuccess(result))
        }).catch((err) => {
            dispatch(fetchFailure(err.message))
        });
    };
};

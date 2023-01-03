import axios from "axios";

const GetFromApi = async () => {
    let datas=[
    ];
    datas=await axios.all([
        axios.get('https://fakestoreapi.com/products'),
        axios.get('https://dummyjson.com/products'),
        // axios.get('https://api.escuelajs.co/api/v1/products'),
        ]);
        return datas;

};

export default GetFromApi;
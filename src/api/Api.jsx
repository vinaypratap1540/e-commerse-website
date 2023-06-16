import axios from "axios";

export async function pData(){
    const products = await axios.get("https://fakestoreapiserver.reactbd.com/products");
    return products; 
}
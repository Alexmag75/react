import axios from 'axios'
import type {IUserWhitTokens} from "../models/IUserWhitTokens.ts";
import type {IProducts} from "../models/products/IProducts.ts";
import type {IProductsResponseModelType} from "../models/products/IProductsResponseModelType.ts";



const axiosInstance=axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}
export const login=async ({username,password,expiresInMins}:LoginData):Promise<IUserWhitTokens> =>{

   const {data: userWhitTokens}=await axiosInstance.post<IUserWhitTokens>('/login',{username,password,expiresInMins});
   localStorage.setItem('user',JSON.stringify(userWhitTokens))
    return userWhitTokens;
}

export const LoadAuthProducts=async ():Promise<IProducts[]>=>{
const {data}= await axiosInstance.get<IProductsResponseModelType>('/products')
    return data.products

}
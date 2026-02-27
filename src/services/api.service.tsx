import axios from 'axios'
import type {IUserWhitTokens} from "../models/IUserWhitTokens.ts";
import type {IProducts} from "../models/products/IProducts.ts";
import type {IProductsResponseModelType} from "../models/products/IProductsResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance=axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

axiosInstance.interceptors.request.use((reguestObject)=>{
    if(reguestObject.method?.toUpperCase() === 'GET'){
        reguestObject.headers.Authorization = `Bearer `+retrieveLocalStorage<IUserWhitTokens>('user').accessToken;
    }
    return reguestObject;
})

export const login=async ({username,password,expiresInMins}:LoginData):Promise<IUserWhitTokens> =>{

   const {data: userWhitTokens}=await axiosInstance.post<IUserWhitTokens>('/login',{username,password,expiresInMins});
   localStorage.setItem('user',JSON.stringify(userWhitTokens))
    console.log(userWhitTokens)
    return userWhitTokens;
}

export const LoadAuthProducts=async ():Promise<IProducts[]>=>{
const {data}= await axiosInstance.get<IProductsResponseModelType>('/products');
    return data.products

}

export const Refresh=async ()=>{
   const iUserWithTokens=retrieveLocalStorage<IUserWhitTokens>('user');
    const {data:{accessToken,refreshToken}}= await axiosInstance.post<ITokenPair>('/refresh',{
       refreshToken:iUserWithTokens.refreshToken,
       expiresInMins:1});
    iUserWithTokens.accessToken=accessToken;
    iUserWithTokens.refreshToken=refreshToken;
    localStorage.setItem('user',JSON.stringify(iUserWithTokens));
}
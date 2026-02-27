import axios from 'axios'
import type {IUserWhitTokens} from "../models/IUserWhitTokens.ts";

const axiosInstance=axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}
export const login=async ({ username,password,expiresInMins}:LoginData)=>{

   const {data: userWhitTokens}=await axiosInstance.post<IUserWhitTokens>('/login',{username,password,expiresInMins});
   localStorage.setItem('user',JSON.stringify(userWhitTokens))
}
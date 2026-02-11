import type {UserModel} from "../models/json/UserModel.ts";
import type {UserModelDummy} from "../models/dummy/UserModelDummy.ts";


const endpoint = import.meta.env.VITE_API_BASE_URL1+'/users'

const LoadUsers=async ():Promise<UserModel[]>=> {
    return await fetch(endpoint)
        .then(res=>res.json())
}
export { LoadUsers }


const endpoint2 = import.meta.env.VITE_API_BASE_URL2+'/users'

const LoadUsersDummy=async ():Promise<UserModelDummy[]>=> {
const response:{users:UserModelDummy[],total:number, skip:number, limit:number}= await fetch(endpoint2)
    .then(res=>res.json())
    return response.users;
}
export { LoadUsersDummy }
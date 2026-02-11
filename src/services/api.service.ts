import type {UserModel} from "../models/usersJson/UserModel.ts";
import type {UserModelDummy} from "../models/usersDummy/UserModelDummy.ts";

const URL_JSON=import.meta.env.VITE_API_BASE_URL1
const URL_DUMMY=import.meta.env.VITE_API_BASE_URL2

const endpoint = URL_JSON+'/users'

const LoadUsersJson=async ():Promise<UserModel[]>=> {
    return await fetch(endpoint)
        .then(res=>res.json())
}
export { LoadUsersJson }


const endpoint2 = URL_DUMMY+'/users'

const LoadUsersDummy=async ():Promise<UserModelDummy[]>=> {
const response:{users:UserModelDummy[],total:number, skip:number, limit:number}= await fetch(endpoint2)
    .then(res=>res.json())
    return response.users;
}
export { LoadUsersDummy }
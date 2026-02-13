import type {UsersModel} from "../modeles/UsersModel/UsersModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL+'/users'

const loadUsers=async ():Promise<UsersModel[]>=> {
    const response:{users:UsersModel[],total:number,skip:number,limit:number} = await fetch(endpoint)
        .then(res=>res.json())
    return response.users
}
export {loadUsers}


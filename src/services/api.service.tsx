import type {IUsersRespons} from "../modeles/IUsersRespons.ts";

const point=import.meta.env.VITE_API_BASE_URL;

const loadUsers=async (page:string):Promise<IUsersRespons>=> {
    const limit=30;
    const skip = limit*(+page)-limit;
    return await fetch(point+'/users'+'?skip='+skip)
        .then(res=>res.json())
}
export { loadUsers }

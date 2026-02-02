import type {IdPost} from "../modeles/IdPost.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL+'/posts'

const loadPosts=async ():Promise<IdPost[]>=> {
    return await fetch(endpoint)
        .then(res=>res.json())
}
export { loadPosts }


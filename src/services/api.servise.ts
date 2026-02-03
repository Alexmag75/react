import type {PostModule} from "../modules/PostModule.ts";
const endpoint = import.meta.env.VITE_API_BASE_URL+'/posts'
const loadPosts=async ():Promise<PostModule[]>=> {
    const response:{posts:PostModule[],views:number, userId:number}= await fetch(endpoint)
        .then(res=>res.json())
    return response.posts;
}
export { loadPosts }

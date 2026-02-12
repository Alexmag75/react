import type {PostsModel} from "../modeles/posts/PostsModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL+'/posts'

const loadPosts=async ():Promise<PostsModel[]>=> {
    const response:{posts:PostsModel[],total:number,skip:number,limit:number} = await fetch(endpoint)
           .then(res=>res.json())
    return response.posts

}
export {loadPosts}


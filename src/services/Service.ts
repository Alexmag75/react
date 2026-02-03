
import type {CommentModule} from "../modules/CommentModule.ts";
const endpoint = import.meta.env.VITE_API_BASE_URL+'/comments'
const loadComments=async ():Promise<CommentModule[]>=> {
    const response:{comments:CommentModule[],total:number, skip:number,limit:number}= await fetch(endpoint)
        .then(res=>res.json())
    return response.comments;
}
export { loadComments }

import type {CommentModel} from "../modeles/CommentModel.ts";
const endpoint = import.meta.env.VITE_API_BASE_URL+'/comments'
const loadComments=async ():Promise<CommentModel[]>=> {
    return await fetch(endpoint)
        .then(res=>res.json())
}
export { loadComments }

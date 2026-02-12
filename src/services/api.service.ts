import type {UserModel} from "../models/usersJson/UserModel.ts";
import type {UserModelDummy} from "../models/usersDummy/UserModelDummy.ts";
import type {PostModelJson} from "../models/postsJson/PostModelJson.ts";
import type {PostModelDummy} from "../models/postsDummy/PostModelDummy.ts";
import type {CommentModelJson} from "../models/commentsJson/CommentModelJson.ts";
import type {CommentModelDummy} from "../models/commentsDummy/CommentModelDummy.ts";

const URL_JSON=import.meta.env.VITE_API_BASE_URL1
const URL_DUMMY=import.meta.env.VITE_API_BASE_URL2
//user
const LoadUsersJson=async ():Promise<UserModel[]>=> {
    return await fetch(URL_JSON+'/users')
        .then(res=>res.json())
}
export { LoadUsersJson }

const LoadUsersDummy=async ():Promise<UserModelDummy[]>=> {
const response:{users:UserModelDummy[],total:number, skip:number, limit:number}= await fetch(URL_DUMMY+'/users')
    .then(res=>res.json())
    return response.users;
}
export { LoadUsersDummy }
//post
const LoadPostsJson=async ():Promise<PostModelJson[]>=> {
    return await fetch(URL_JSON+'/posts')
        .then(res=>res.json())
}
export { LoadPostsJson }

const LoadPostsDummy=async ():Promise<PostModelDummy[]>=> {
    const response:{posts:PostModelDummy[],total:number, skip:number, limit:number}= await fetch(URL_DUMMY+'/posts')
        .then(res=>res.json())
    return response.posts;
}
export { LoadPostsDummy }

//comments
const LoadCommentsJson=async ():Promise<CommentModelJson[]>=> {
    return await fetch(URL_JSON+'/comments')
        .then(res=>res.json())
}
export { LoadCommentsJson }

const LoadCommentsDummy=async ():Promise<CommentModelDummy[]>=> {
    const response:{comments:CommentModelDummy[],total:number, skip:number, limit:number}= await fetch(URL_DUMMY+'/comments')
        .then(res=>res.json())
    return response.comments;
}
export { LoadCommentsDummy }
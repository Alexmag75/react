import type {IUser} from "../modeles/IUser.ts";
import type {IPost} from "../modeles/IPost.ts";
import type {IComment} from "../modeles/IComment.ts";

const baseUrl='https://jsonplaceholder.typicode.com/'

export const userService={
    getAllUsers: async ():Promise<IUser[]> => {
        const users= await fetch(`${baseUrl}/users`)
            .then(res=>res.json());
        return users;
    }
}
export const postService={
    getAllPosts: async ():Promise<IPost[]> => {
        const posts= await fetch(`${baseUrl}/posts`)
            .then(res=>res.json());
        return posts;
    }
}
export const commentService={
    getAllComments: async ():Promise<IComment[]> => {
        const comments= await fetch(`${baseUrl}/comments`)
            .then(res=>res.json());
          return comments;
    }
}

// export const getAll=async<T> (endpoint:string)=> {
//     const responseResult= await fetch(`${baseUrl}/${endpoint}`).then((response:Response)=>response.json());
//     return responseResult as T;
// }


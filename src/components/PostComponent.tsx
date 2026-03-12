import type {FC} from "react";
import type {IPost} from "../modeles/IPost.ts";
type PropType ={
    post:IPost
}
export const PostComponent:FC<PropType>=({post}) => {
    return(
        <>
            <div style={{ display: "flex", border: "1px solid grey", margin: '20px', padding: '10px'}}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
        </>
    )
}
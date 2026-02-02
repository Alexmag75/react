
import '../postComponent/Post.css'
import {type FC} from "react";
import type {IdPost} from "../../modeles/IdPost.ts";
type PropType = {
    post:IdPost
}
export const Post:FC<PropType> = ({post}) => {
    return (
        <>
            <div className='post'>
                   <h2>userId:{post.userId}</h2>
                    <h3>id: {post.id}</h3>
                    <p>{post.title}</p>
                    <div className='postBody'>{post.body}</div>
            </div>
        </>
    );
};

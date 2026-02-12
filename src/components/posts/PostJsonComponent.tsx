import {type FC} from "react";
import './PostComponent.css'
import type {PostModelJson} from "../../models/postsJson/PostModelJson.ts";

type PropType = {
    post:PostModelJson
}
export const PostJsonComponent:FC<PropType> = ({post}) => {
    return (
        <>
            <div className='profile-post'>
                <p> {post.id} {post.title} </p>
                <p className='post'> {post.body}</p>
            </div>
        </>
    );
};

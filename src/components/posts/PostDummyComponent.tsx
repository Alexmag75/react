import './PostComponent.css'
import {type FC} from "react";
import type {PostModelDummy} from "../../models/postsDummy/PostModelDummy.ts";
type PropType = {
    post:PostModelDummy
}
export const PostDummyComponent:FC<PropType> = ({post}) => {
    return (
        <>
            <div className='profile-post'>
            <p> {post.id} {post.title} </p>
            <p className='post'> {post.body}</p>
    <p> #Теги: {post.tags.join(', ')} </p>
    <p> Лайк: {post.reactions.likes}</p>
    <p> Дизлайк: {post.reactions.dislikes}</p>
    </div>
    </>
);
};

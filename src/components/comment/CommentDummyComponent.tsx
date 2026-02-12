import './CommentComponent.css'
import {type FC} from "react";
import type {CommentModelDummy} from "../../models/commentsDummy/CommentModelDummy.ts";
type PropType = {
    comment:CommentModelDummy
}
export const CommentDummyComponent:FC<PropType> = ({comment}) => {
    return (
        <>
            <div className='profile-comment'>
                <p> {comment.id} {comment.body} </p>
                <p> Лайк: {comment.likes}</p>
                <p className='user'> {comment.user.username} {comment.user.fullName}</p>
            </div>
        </>
    );
};

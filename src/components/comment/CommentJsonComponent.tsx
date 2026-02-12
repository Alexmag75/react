import {type FC} from "react";
import './CommentComponent.css'
import type {CommentModelJson} from "../../models/commentsJson/CommentModelJson.ts";


type PropType = {
    comment:CommentModelJson
}
export const CommentJsonComponent:FC<PropType> = ({comment}) => {
    return (
        <>
            <div className='profile-post'>
                <p> {comment.id} {comment.name} {comment.email}</p>
                <p className='post'> {comment.body}</p>
            </div>
        </>
    );
};

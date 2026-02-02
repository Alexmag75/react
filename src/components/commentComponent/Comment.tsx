import './Comment.css'
import type {CommentModel} from "../../modeles/CommentModel.ts";
import type {FC} from "react";

type PropType ={
    comment: CommentModel
}

export const Comment:FC<PropType> = ({comment}) => {
    return (
        <>
            <div className='commentBody'>
                <h2>postId: {comment.postId}</h2>
                 <p> id: {comment.id}</p>
                <p> name: {comment.name}</p>
                <p> email: {comment.email}</p>
                 <div className='bodyComment'> Comment: {comment.body}</div>
            </div>
        </>
    );
};
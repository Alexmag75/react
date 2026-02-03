import './Comment.css'
import { type FC } from "react";
import type {CommentModule} from "../../modules/CommentModule.ts";
type PropType = {
    comment: CommentModule;
};

export const Comment: FC<PropType> = ({comment}) => {
    return (
        <div className='bodyComment'>
            <p>{comment.body}</p>
            <small>ID поста: {comment.id}</small>
            <div className='bodyName'>
                <p>Автор: {comment.user.username}</p>
                <p>{comment.user.fullName}</p>
            </div>
            <div >
                <strong>Лайки:{comment.likes}</strong>

            </div>
        </div>
    );
};

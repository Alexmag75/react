import {useEffect, useState} from "react";

import type {CommentModule} from "../../modules/CommentModule.ts";
import {loadComments} from "../../services/Service.ts";
import {Comment} from "../comment/Comment.tsx";
export const Comments = () => {
    const [comments, setComments] = useState<CommentModule[]>([])
    useEffect(() => {
        loadComments().then(value => setComments(value));
    }, []);
    return (
        <div >
            {
                comments.map(comment=><Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

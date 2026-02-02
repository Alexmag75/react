import type {CommentModel} from "../../modeles/CommentModel.ts";
import {loadComments} from "../../service/api.cervice.ts";
import {useEffect, useState} from "react";
import {Comment} from "../commentComponent/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<CommentModel[]>([])
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



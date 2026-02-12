import {useEffect, useState} from "react";
import {LoadCommentsJson} from "../../services/api.service.ts";
import type {CommentModelJson} from "../../models/commentsJson/CommentModelJson.ts";
import {CommentJsonComponent} from "./CommentJsonComponent.tsx";

export const LoadCommentsJsonComponent = () => {
    const [toComments, setToComments] = useState<CommentModelJson[]>([])
    useEffect(() => {
        LoadCommentsJson().then(value => setToComments(value));
    }, []);
    return (
        <div>
            {
                toComments.map(comment=><CommentJsonComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

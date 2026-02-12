import {useEffect, useState} from "react";
import type {CommentModelDummy} from "../../models/commentsDummy/CommentModelDummy.ts";
import {LoadCommentsDummy} from "../../services/api.service.ts";
import {CommentDummyComponent} from "./CommentDummyComponent.tsx";

export const LoadCommentsDummyComponent = () => {
    const [toComments, setToComments] = useState<CommentModelDummy[]>([])
    useEffect(() => {
        LoadCommentsDummy().then(value => setToComments(value));
    }, []);
    return (
        <div>
            {
                toComments?.map(comment=><CommentDummyComponent comment={comment} key={comment.id}/>)
            }
        </div>
    );
};
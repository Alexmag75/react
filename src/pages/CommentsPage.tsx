import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../slices/CommentSlice.tsx";
import type {IComment} from "../modeles/IComment.ts";
import {CommentComponent} from "../components/CommentComponent.tsx";

export const CommentsPage=()=>{
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state)=>state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments());
    },[]);
    return (
        <>

            {comments.map((comment: IComment) => (
                <CommentComponent comment={comment} key={comment.id} />
            ))}

        </>
    )
}
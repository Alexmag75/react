import type {FC} from "react";
import type {IComment} from "../modeles/IComment.ts";

type PropType ={
    comment:IComment
}
export const CommentComponent:FC<PropType>=({comment}) => {
    return(
        <>
            <div style={{display: "flex", border: "1px solid grey", margin: '20px', padding: '10px'}}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        </>
    )
}
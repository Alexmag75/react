import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../slices/UserSlice.tsx";
import {postActions} from "../slices/PostSlice.tsx";
import {commentActions} from "../slices/CommentSlice.tsx";
import type {IUser} from "../modeles/IUser.ts";
import {UserComponent} from "../components/UserComponent.tsx";
import type {IPost} from "../modeles/IPost.ts";
import {PostComponent} from "../components/PostComponent.tsx";
import type {IComment} from "../modeles/IComment.ts";
import {CommentComponent} from "../components/CommentComponent.tsx";

export const ComplexPage=()=>{

    const dispatch = useAppDispatch();
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} = useAppSelector(state=>state);

    useEffect(() => {
        if(!users.length){
            dispatch(userActions.loadUsers());
        }
        if(!posts.length){
            dispatch(postActions.loadPosts());
        }
        if(!comments.length){
            dispatch(commentActions.loadComments());
        }

    },[]);

    return(
        <>
            {users.map((user: IUser) => (
                <UserComponent user={user} key={user.id} />
            ))}
            {posts.map((post: IPost) => (
                <PostComponent post={post} key={post.id} />
            ))}
            {comments.map((comment: IComment) => (
                <CommentComponent comment={comment} key={comment.id} />
            ))}

        </>
    )
}
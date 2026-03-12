import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../slices/PostSlice.tsx";
import type {IPost} from "../modeles/IPost.ts";
import {PostComponent} from "../components/PostComponent.tsx";

export const PostsPage =()=> {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state)=>state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPosts());
    },[]);
    return (
        <>

            {posts.map((post: IPost) => (
                <PostComponent post={post} key={post.id} />
            ))}

        </>
    )
}
import type {PostsModel} from "../../modeles/posts/PostsModel.ts";
import {useEffect, useState} from "react";
import {loadPosts} from "../../services/posts.api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponents = () => {
    const [posts, setPosts] = useState<PostsModel[]>([])
    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    }, []);
    return (
        <div >
            {
                posts.map(post=><PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

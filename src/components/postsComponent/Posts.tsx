import {useEffect, useState} from "react";
import {Post} from "../postComponent/Post.tsx";
import {loadPosts} from "../../services/api.cervice.ts";
import type {IdPost} from "../../modeles/IdPost.ts";

export const Posts = () => {
    const [posts, setPosts] = useState<IdPost[]>([])
    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    );
};
import {useEffect, useState} from "react";
import type {PostModule} from "../../modules/PostModule.ts";
import {Post} from "../postComponent/Post.tsx";
import {loadPosts} from "../../cervice/api.cervice.ts";
export const Posts = () => {
    const [posts, setPosts] = useState<PostModule[]>([])
    useEffect(() => {
        loadPosts().then(value => setPosts(value));
    }, []);
    return (
        <div >
            {
                posts.map(post=><Post post={post} key={post.id}/>)
            }
        </div>
    );
};


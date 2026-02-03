import {useEffect, useState} from "react";
import type {PostModule} from "../../modules/PostModule.ts";
import {loadPosts} from "../../services/api.servise.ts";
import {Post} from "../post/Post.tsx";

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

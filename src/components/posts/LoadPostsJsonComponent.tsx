import {useEffect, useState} from "react";
import {LoadPostsJson} from "../../services/api.service.ts";
import type {PostModelJson} from "../../models/postsJson/PostModelJson.ts";
import {PostJsonComponent} from "./PostJsonComponent.tsx";
export const LoadPostsJsonComponent = () => {
    const [toPosts, setToPosts] = useState<PostModelJson[]>([])
    useEffect(() => {
        LoadPostsJson().then(value => setToPosts(value));
    }, []);
    return (
        <div>
            {
                toPosts.map(post=><PostJsonComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

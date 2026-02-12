import {useEffect, useState} from "react";
import type {PostModelDummy} from "../../models/postsDummy/PostModelDummy.ts";
import {LoadPostsDummy} from "../../services/api.service.ts";
import {PostDummyComponent} from "./PostDummyComponent.tsx";


export const LoadUsersDummyComponent = () => {
    const [toPosts, setToPosts] = useState<PostModelDummy[]>([])
    useEffect(() => {
        LoadPostsDummy().then(value => setToPosts(value));
    }, []);
    return (
        <div>
            {
                toPosts.map(post=><PostDummyComponent post={post} key={post.id}/>)
            }
        </div>
    );
};
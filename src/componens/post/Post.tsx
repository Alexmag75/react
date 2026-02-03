import { type FC } from "react";
import type { PostModule } from "../../modules/PostModule.ts";
import './Post.css'
type PropType = {
    post: PostModule;
};

export const Post: FC<PropType> = ({ post }) => {
    return (
        <div className='bodyPost'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>ID поста: {post.id}</small>
            <div>
                <strong>Теги: </strong>
                {post.tags.map((tag, index) => (
                    <span  key={index} className='tags' > #{tag}</span>
                ))}
            </div>

            <div >
                <strong>Реакции:</strong>
                <p>Лайки: {post.reactions.likes}</p>
                <p>Дизлайки: {post.reactions.dislikes}</p>
            </div>
        </div>
    );
};


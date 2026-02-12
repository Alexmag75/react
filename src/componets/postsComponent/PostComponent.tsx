import type {FC} from "react";
import type {PostsModel} from "../../modeles/posts/PostsModel.ts";
import './PostComponent.css'
type PropType = {
    post: PostsModel;
};

export const PostComponent: FC<PropType> = ({post}) => {
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


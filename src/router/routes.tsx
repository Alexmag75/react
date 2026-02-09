import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {CommentComponent} from "../components/CommentComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {ProductsComponent} from "../components/ProductsComponent.tsx";

export const routes=createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersComponent/>},
            {path: 'posts', element: <PostsComponent/>},
            {path: 'comments', element: <CommentComponent/>},
            {path: 'products', element: <ProductsComponent/>}
        ]
    }
])

import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersComponent} from "../components/users/UsersComponent.tsx";
import {UsersJsonplaceholderComponent} from "../components/users/UsersJsonplaceholderComponent.tsx";
import {PostsComponent} from "../components/posts/PostsComponent.tsx";
import {PostsJsonplaceholderComponent} from "../components/posts/PostsJsonplaceholderComponent.tsx";
import {PostsDummyjsonComponent} from "../components/posts/PostsDummyjsonComponent.tsx";
import {CommentsComponent} from "../components/comment/CommentsComponent.tsx";
import {CommentJsonplaceholderComponent} from "../components/comment/CommentJsonplaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../components/users/UsersDummyjsonComponent.tsx";
import {CommentDummyjsonComponent} from "../components/comment/CommentDummyjsonComponent.tsx";



export const routes=createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersComponent/>,
                children:[ {path: 'jsonplaceholder', element: <UsersJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <UsersDummyjsonComponent/>}
                ]
            },
            {path: 'posts', element: <PostsComponent/>,
                children:[ {path: 'jsonplaceholder', element: <PostsJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <PostsDummyjsonComponent/>}
                ]
            },
            {path: 'comments', element: <CommentsComponent/>,
                children:[ {path: 'jsonplaceholder', element: <CommentJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <CommentDummyjsonComponent/>}
                ]
            },

        ]
    }
])

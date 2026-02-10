import {createBrowserRouter} from "react-router";
import App from "../App.tsx";

import {CommentsComponent} from "../components/CommentsComponent.tsx";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {UsersJsonplaceholderComponent} from "../components/UsersJsonplaceholderComponent.tsx";
import {UsersDummyjsonComponent} from "../components/UsersDummyjsonComponent.tsx";
import {PostsDummyjsonComponent} from "../components/PostsDummyjsonComponent.tsx";
import {PostsJsonplaceholderComponent} from "../components/PostsJsonplaceholderComponent.tsx";
import {CommentJsonplaceholderComponent} from "../components/CommentJsonplaceholderComponent.tsx";

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
                children:[ {path: 'jsonplaceholder', element: <CommentJsonplaceholderComponent/>}]
            },

        ]
    }
])

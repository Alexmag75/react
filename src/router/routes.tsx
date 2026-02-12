import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layutos/MainLayout.tsx";
import {UsersPage} from "../layutos/UsersPage.tsx";
import {PostsPage} from "../layutos/PostsPage.tsx";


export const routes=createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>}
        ]


    }
])


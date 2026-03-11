import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {ComplexPage} from "../pages/ComplexPage.tsx";

export const routes=createBrowserRouter([
    {
        path: '/', element: <App/>, children:[
            {path: 'users', element:<UsersPage/>},
            {path: 'posts', element:<PostsPage/>},
            {path: 'comments', element:<PostsPage/>},
            {path: 'complex', element:<ComplexPage/>}
        ]
    }

])
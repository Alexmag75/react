import {createBrowserRouter} from "react-router";
import {MainLayaut} from "../layouts/MainLayaut.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PaginationLayaut} from "../layouts/PaginationLayaut.tsx";

export const routes=createBrowserRouter([
    {
        path: '/', element: <MainLayaut/>, children: [
            {
                path: '', element: <PaginationLayaut/>, children:[
               {
                   path: 'users', element: <UsersPage/>}
                ]
            }
         ]
    }
])

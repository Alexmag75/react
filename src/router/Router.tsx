import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";


export const routes=createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path:'users', element:<UsersPage/>, children:[
                    {path:':id/carts', element:<CartsPage/>}
                ]},
        ]
    }
])

import {CarsComponent} from "../components/CarsComponent.tsx";
import {createBrowserRouter} from "react-router";
import App from "../App.tsx";

export const routes=createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'cars', element: <CarsComponent/>}
            //{path: 'posts', element: <PostsComponent/>},

        ]
    }
])


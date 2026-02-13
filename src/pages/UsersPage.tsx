import {UsersComponents} from "../components/UsersComponent.tsx";
import {Outlet} from "react-router";


export const  UsersPage =()=> {
    return(
        <div>
            <Outlet/>
            <UsersComponents/>
        </div>
    );
};

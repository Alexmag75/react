import {CartsComponent} from "../components/CartsComponent.tsx";

export const CartsPage=()=>{
    return (
        <div>
            <CartsComponent/>
        </div>
    )
}

UsersPage


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

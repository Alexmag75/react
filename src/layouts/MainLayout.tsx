import {Outlet} from "react-router";
import {Menu} from "../components/Menu/Menu.tsx";

export const MainLayout=()=>{
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}

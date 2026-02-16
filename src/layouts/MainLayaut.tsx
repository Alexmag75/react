import {Menu} from "../menu/Menu.tsx";
import {Outlet} from "react-router";

export const MainLayaut=()=>{
    return (
        <>
        <Menu/>
            <Outlet/>
        </>
    )
}
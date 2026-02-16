import {Pagination} from "../component/Pagination.tsx";
import {Outlet} from "react-router";

export const PaginationLayaut=()=>{
    return (
        <>
            <Outlet/>
           <Pagination/>
        </>
    )
}
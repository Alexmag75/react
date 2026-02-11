import {Outlet} from "react-router";

export const UsersComponent=()=>{
    return(
        <>
            <div> Пользователи </div>
            <Outlet/>
        </>
    );
};

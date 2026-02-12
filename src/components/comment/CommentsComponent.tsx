import {Outlet} from "react-router";

export const CommentsComponent=()=>{
    return(
        <>
            <div> Комментарии</div>
            <Outlet/>
        </>
    );
};

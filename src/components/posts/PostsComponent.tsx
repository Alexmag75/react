import {Outlet} from "react-router";

export const PostsComponent=()=> {
    return (
        <>
            <div> Посты</div>
            <Outlet/>
        </>
    );
}
import {useEffect} from "react";
import {userActions} from "../slices/UserSlice.tsx";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import type {IUser} from "../modeles/IUser.ts";
import {UserComponent} from "../components/UserComponent.tsx";


export const UsersPage = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state)=>state.userStoreSlice.users);
    useEffect(() => {
           dispatch(userActions.loadUsers());
    },[]);
    return (
        <>

                {users.map((user: IUser) => (
                    <UserComponent user={user} key={user.id} />
                ))}

        </>
    )
}
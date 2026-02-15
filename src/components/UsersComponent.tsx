import {useEffect, useState} from "react";
import {loadUsers} from "../services/users.api.service.ts";
import {UserComponent} from "./UserComponent.tsx";
import type {UsersModel} from "../modeles/UsersModel/UsersModel.ts";

export const UsersComponents = () => {
    const [users, setUsers] = useState<UsersModel[]>([])
    useEffect(() => {
        loadUsers().then(value => setUsers(value));
    }, []);
    return (
        <div >
            {
                users.map((user:UsersModel)=><UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

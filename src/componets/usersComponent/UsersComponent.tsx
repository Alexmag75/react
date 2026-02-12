import {useEffect, useState} from "react";
import type {UsersModel} from "../../modeles/users/UsersModel.ts";
import {UserComponent} from "./UserComponent.tsx";
import {loadUsers} from "../../services/users.api.service.ts";


export const UsersComponents = () => {
    const [users, setUsers] = useState<UsersModel[]>([])
    useEffect(() => {
        loadUsers().then(value => setUsers(value));
    }, []);
    return (
        <div >
            {
                users.map(user=><UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

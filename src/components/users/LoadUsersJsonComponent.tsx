import {useEffect, useState} from "react";
import {UserJsonComponent} from "./UserJsonComponent.tsx";
import {LoadUsers} from "../../services/api.service.ts";
import type {UserModel} from "../../models/json/UserModel.ts";
export const LoadUsersJsonComponent = () => {
    const [toUsers, setToUsers] = useState<UserModel[]>([])
    useEffect(() => {
        LoadUsers().then(value => setToUsers(value));
    }, []);
    return (
        <div>
            {
                toUsers.map(user=><UserJsonComponent user={user} key={user.id}/>)
            }
        </div>
);
};

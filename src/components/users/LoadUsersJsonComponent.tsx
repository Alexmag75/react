import {useEffect, useState} from "react";
import {UserJsonComponent} from "./UserJsonComponent.tsx";
import {LoadUsersJson} from "../../services/api.service.ts";
import type {UserModel} from "../../models/usersJson/UserModel.ts";
export const LoadUsersJsonComponent = () => {
    const [toUsers, setToUsers] = useState<UserModel[]>([])
    useEffect(() => {
        LoadUsersJson().then(value => setToUsers(value));
    }, []);
    return (
        <div>
            {
                toUsers.map(user=><UserJsonComponent user={user} key={user.id}/>)
            }
        </div>
);
};

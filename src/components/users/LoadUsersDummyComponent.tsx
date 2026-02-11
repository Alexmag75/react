import {useEffect, useState} from "react";
import {UserDummyComponent} from "./UserDummyComponent.tsx";
import {LoadUsersDummy} from "../../services/api.service.ts";
import type {UserModelDummy} from "../../models/usersDummy/UserModelDummy.ts";
export const LoadUsersDummyComponent = () => {
    const [toUsers, setToUsers] = useState<UserModelDummy[]>([])
    useEffect(() => {
        LoadUsersDummy().then(value => setToUsers(value));
    }, []);
    return (
        <div>
            {
                toUsers.map(user=><UserDummyComponent user={user} key={user.id}/>)
            }
        </div>
    );
};
import {type FC} from "react";
import type {UserModelDummy} from "../../models/dummy/UserModelDummy.ts";
type PropType = {
    user:UserModelDummy
}
export const UserDummyComponent:FC<PropType> = ({user}) => {
    return (
        <>
            {user.username}
            {user.email}
        </>
    );
};

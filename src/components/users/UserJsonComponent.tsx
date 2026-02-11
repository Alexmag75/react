import {type FC} from "react";
import type {UserModel} from "../../models/json/UserModel.ts";

type PropType = {
    user:UserModel
}
export const UserJsonComponent:FC<PropType> = ({user}) => {
    return (
        <>
            {user.id}
            {user.name}
            {user.username}
            {user.website}
        </>
    );
};

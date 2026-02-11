import {type FC} from "react";
import type {UserModel} from "../../models/json/UserModel.ts";
import './UserComponent.css'

type PropType = {
    user:UserModel
}
export const UserJsonComponent:FC<PropType> = ({user}) => {
    return (
        <>
            <div className='profile-card'>
                     <p> {user.id} {user.name} Логин: {user.username}</p>
                     <p> Email: {user.email}</p>
                     <p> Телефон: {user.phone}</p>
                      <p> WebSaite: {user.website}</p>
                     <p> Адрес: {user.address.city} {user.address.suite} {user.address.street} {user.address.zipcode}</p>
                     <p> Компания: {user.company.name} {user.company.bs} {user.company.catchPhrase}</p>
            </div>
        </>
    );
};

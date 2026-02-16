import type {FC} from "react";
import type {IUsers} from "../modeles/IUsers.ts";

type Props= {
    user: IUsers;
}

export const UserComponent:FC<Props> = ({user}) => {

    return (
        <div className='profile-card'>
             <p> {user.id} {user.firstName} {user.lastName} {user.maidenName} {user.age} лет {user.birthDate}</p>

        </div>
    );
};

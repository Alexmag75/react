import type {FC} from "react";
import type {IUser} from "../modeles/IUser.ts";
type PropType ={
    user:IUser
}
export const UserComponent:FC<PropType>=({user}) => {
    return(
        <>
            <div style={{ display: "flex", border: "1px solid grey", margin: '20px', padding: '10px'}}>
               <p>{user.name}</p>
               <p>{user.email}</p>
               <p>{user.website}</p>
            </div>
                    </>
    )
}
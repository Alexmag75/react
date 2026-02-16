import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";
import type {IUsers} from "../modeles/IUsers.ts";
import type {IUsersRespons} from "../modeles/IUsersRespons.ts";
import {loadUsers} from "../services/api.service.tsx";
import {useSearchParams} from "react-router";
import './UsersComponent.css'

export const UsersComponents = () => {

    const[searchParams]=useSearchParams({page:'1'})


    const [users,setUsers]=useState<IUsers[]>([]);
    useEffect(() => {
        const currentPage=searchParams.get('page')||'1'

        loadUsers(currentPage).then(({users}:IUsersRespons) => {setUsers(users)});

    }, [searchParams]);

    return (
            <div className='container'>

                {
                    users.map((user:IUsers)=><UserComponent user={user} key={user.id}/>)
                }
            </div>
        );
    };

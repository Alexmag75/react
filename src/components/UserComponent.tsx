import './UserComponent.css'
import {useNavigate} from "react-router";
import type {FC} from "react";
import type {UsersModel} from "../modeles/UsersModel/UsersModel.ts";

type Props= {
    user: UsersModel;
}

export const UserComponent:FC<Props> = ({user}) => {
    const navigation=useNavigate();
    const onButtonClickNavigate = ()=>{
        navigation('/users/'+user.id+'/carts');
    }
    return (
        <div className='profile-card'>
            <img src={user.image}></img>
            <p> {user.firstName} {user.lastName} {user.maidenName} {user.age} лет {user.birthDate}</p>
            <p> Логин: {user.username} тел {user.phone}  пароль: {user.password} </p>
            <p> Адрес: {user.address.state} тел {user.address.city} {user.address.address} {user.address.postalCode}</p>
            <p> Банк: {user.bank.currency} {user.bank.cardType} {user.bank.cardNumber} {user.bank.cardExpire} {user.bank.iban}</p>
            <p> Компания: {user.company.department} тел {user.company.name}  пароль: {user.company.title} </p>
            <p> Должность: {user.role}</p>
            <button onClick={onButtonClickNavigate}>Products User</button>
        </div>
    );
};

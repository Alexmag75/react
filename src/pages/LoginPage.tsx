import {useEffect} from "react";
import {login} from "../services/api.service.tsx";

export const LoginPage = () => {
    useEffect(() => {
        // Вызываем асинхронную функцию авторизации
        login(
            {
                username: "emilys",    // Тестовое имя пользователя
                password: "emilyspass", // Тестовый пароль
                expiresInMins: 1       // Время жизни токена
            }
        );

    }, [])

    return (

        <> </>
    )
}
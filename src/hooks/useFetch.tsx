import {useEffect, useState} from "react"; // Импортируем базовые хуки React
/** Кастомный хук useFetch. */
export const useFetch = () => {
    // Создаем состояние для хранения списка пользователей.
    const [users, setUsers] = useState([]);
    useEffect(() => {
        //  сетевой запрос к учебному API JSONPlaceholder.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });
    }, []);
    return users;
}
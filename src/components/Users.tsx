import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";
import {User} from "./User.tsx";

export const Users = () => {
    // Вызываем кастомный хук
    const users = useFetch();

    // useMemo Мемоизирует (кеширует) значение.
    // Пустой массив говорит React: "Создай этот массив один раз и храни его".
    const mas: string[] = useMemo(() => {
        return ['a', 'b', 'c', 'd'];
    }, []);

    // useCallback: Мемоизирует саму ФУНКЦИЮ.
    // Без этого хука функция foo пересоздавалась бы (получала новую ссылку) при каждом рендере.
    const foo = useCallback(() => {
        console.log('Test');
    }, []); // [] означает, что функция будет создана только один раз при старте компонента

    return (
        <div>
            {
               users.map(user => (
                    <User
                        item={user}     /* Данные пользователя */
                        foo={foo}       /* Ссылка на функцию (из useCallback) */
                        mas={mas}       /* Ссылка на массив (из useMemo) */
                    />
                ))
            }
        </div>
    );
};
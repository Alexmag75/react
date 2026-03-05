import {type FC, memo} from "react";

/**
 * Обертка memo():
 * Она проверяет пропсы (item, mas, foo). Если они НЕ изменились с прошлого рендера,
 * React пропустит выполнение этой функции
 */
export const User: FC<{
    foo: () => void,
    mas: string[],
    item: { name: string }
}> = memo(({mas, item}) => {

    console.log('Рендер компонента User:', item.name);

    return (
        <div>
            {item.name}
            {mas}
        </div>
    );
});
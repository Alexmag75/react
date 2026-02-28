/**
 * Функция для извлечения данных из LocalStorage с типизацией.
 */
export const retrieveLocalStorage = <T>(key: string) => {

    // Получаем строку из LocalStorage по ключу 'key'.
    // Если ключа нет (вернется null), записываем пустую строку '' как фоллбек.
    const object = localStorage.getItem(key) || '';

    // Если данных нет, возвращаем пустой объект, типизируя к T.
    if (!object) {
        return {} as T;
    }

    // Преобразуем строку JSON обратно в JavaScript-объект
    const parse = JSON.parse(object);

    // Возвращаем объект
    return parse as T;
}
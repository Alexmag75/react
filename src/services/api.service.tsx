import axios from 'axios'
import type {IUserWhitTokens} from "../models/IUserWhitTokens.ts";
import type {IProducts} from "../models/products/IProducts.ts";
import type {IProductsResponseModelType} from "../models/products/IProductsResponseModelType.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

// Создаем отдельный экземпляр axios с базовыми настройками
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth', // Базовый URL для всех запросов
    headers: {} // Пустой объект заголовков
});

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

axiosInstance.interceptors.request.use((reguestObject) => {
    // Проверяем, является ли метод запроса GET
    if (reguestObject.method?.toUpperCase() === 'GET') {
        // Извлекаем пользователя из LocalStorage через наш хелпер
        const user = retrieveLocalStorage<IUserWhitTokens>('user');
        // Добавляем заголовок авторизации с  токеном
        reguestObject.headers.Authorization = `Bearer ` + user.accessToken;
    }
    // Возвращаем модифицированный объект запроса
    return reguestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWhitTokens> => {
    // Выполняем POST запрос на /login
    const {data: userWhitTokens} = await axiosInstance.post<IUserWhitTokens>('/login', {username, password, expiresInMins});

    // Сохраняем полученного пользователя и его токены
    localStorage.setItem('user', JSON.stringify(userWhitTokens));

    // Возвращаем данные пользователя
    return userWhitTokens;
}

export const LoadAuthProducts = async (): Promise<IProducts[]> => {
    // Делаем GET запрос. Интерцептор выше автоматически добавит токен в этот запрос.
    const {data} = await axiosInstance.get<IProductsResponseModelType>('/products');

    // Возвращаем массив продуктов
    return data.products;
}

export const Refresh = async () => {
    // Берем текущие данные пользователя
    const iUserWithTokens = retrieveLocalStorage<IUserWhitTokens>('user');

    // Отправляем запрос на обновление, передавая старый refreshToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMins: 1 // время жизни нового токена
    });

    // Обновляем поля в объекте пользователя
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    // Перезаписываем обновленного пользователя в LocalStorage
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}
import {useEffect, useState} from "react";
import {LoadAuthProducts, Refresh} from "../services/api.service.tsx";
import type {IProducts} from "../models/products/IProducts.ts";
import {Product} from "../components/productsComponent/Product.tsx";
import './AutsResourcesPage.css'

export const AutsResourcesPage = () => {
    // Создаем состояние массив продуктов и функцию для его обновления.
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(() => {
        // Пытаемся сразу загрузить продукты
        LoadAuthProducts()
            .then(products => { setProducts(products) }) // Если успешно — сохраняем их
            .catch(e => { console.log(e) }); // Если ошибка (например, токен просрочен) — выводим в консоль ошибку

        // запускаем цепочку обновления токена (Refresh).
        Refresh()
            .then(() => LoadAuthProducts()) // После того как Refresh обновил токен в LocalStorage, снова запрашиваем продукты
            .then(products => {
                setProducts(products); // Обновляем массив данными
            });
    }, []);

    return (
        <>
            {
                <div className="product-list">
            {products.map((product: IProducts) => (<Product product={product} key={product.id} />))}
                </div>
            }
        </>
    )
}
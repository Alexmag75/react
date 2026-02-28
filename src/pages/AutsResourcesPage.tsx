import {useEffect, useState} from "react";
import {LoadAuthProducts, Refresh} from "../services/api.service.tsx";
import type {IProducts} from "../models/products/IProducts.ts";
import {Product} from "../components/productsComponent/Product.tsx";
import './AutsResourcesPage.css'

export const AutsResourcesPage=()=>{
    const [products, setProducts] = useState<IProducts[]>([]);
    useEffect(() => {
        LoadAuthProducts().then(products  => {setProducts(products)}).catch(e =>{console.log(e)});
        Refresh().then(() =>  LoadAuthProducts())
                    .then(products  => {setProducts(products)});
    }, []);

    return(
        <>
            {
                <div className="product-list">
                    {products.map((product:IProducts)=><Product product={product} key={product.id}/>)}
                </div>
            }

        </>
    )
}
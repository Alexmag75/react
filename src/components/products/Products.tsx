import {useEffect, useState} from "react";
import type {ProductsModule} from "../../modules/ProductsModule.ts";
import {loadProducts} from "../../cervices/api.service.ts";
import {Product} from "../product/Product.tsx";
export const Products = () => {
    const [products, setProducts] = useState<ProductsModule[]>([])
    useEffect(() => {
        loadProducts().then(value => setProducts(value));
    }, []);
    console.log(products)
    return (
        <div >
            {
                products.map(product=><Product product={product} key={product.id}/>)
            }
        </div>
    );
};


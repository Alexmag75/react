import {type FC} from "react";
import type {ProductsModule} from "../../modules/ProductsModule.ts";
type PropType = {
    product:ProductsModule
}
export const Product:FC<PropType> = ({product}) => {
    return (
        <>
            {product.id}
            {product.title}

        </>
    );
};

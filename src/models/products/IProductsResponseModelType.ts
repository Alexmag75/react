import type {IProducts} from "./IProducts.ts";

export type IProductsResponseModelType = {
    total: number;
    limit: number;
    offset: number;
    products:IProducts[]
}
import type {Products} from "./Products.ts";


export  interface CartsModel {
    id?: number;
    products?: Products[];
    total?: number;
    discountedTotal?: number;
    userId?: number;
    totalProducts?: number;
    totalQuantity?: number;
}

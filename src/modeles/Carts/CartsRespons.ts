import type {CartsModel} from "./CartsModel.ts";

export interface CartsRespons {
    total: number;
    skip: number;
    limit: number;
    carts:CartsModel[]
}

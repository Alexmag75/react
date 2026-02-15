import type {CartsRespons} from "../modeles/Carts/CartsRespons.ts";

const point=import.meta.env.VITE_API_BASE_URL;
export const cartService={
    getCartUser: async (userId:string):Promise<CartsRespons>=> {
        return await fetch( point+'carts/user/'+userId)
            .then(res=>res.json())
    }
}


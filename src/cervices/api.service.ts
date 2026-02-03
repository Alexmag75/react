import type {ProductsModule} from "../modules/ProductsModule.ts";
const endpoint = import.meta.env.VITE_API_BASE_URL+'/products';
const loadProducts=async ():Promise<ProductsModule[]>=> {
    const response:{products:ProductsModule[],total:number, skip:number,limit:number}= await fetch(endpoint)
        .then(res=>res.json())
    return response.products;
}
export { loadProducts }


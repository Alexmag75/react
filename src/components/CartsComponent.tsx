import {useParams} from "react-router";
import type {CartsModel} from "../modeles/Carts/CartsModel.ts";
import {useEffect, useState} from "react";
import type {CartsRespons} from "../modeles/Carts/CartsRespons.ts";
import {cartService} from "../services/api.service.ts";

export const CartsComponent=()=>{

    const {id}=useParams();
    const [carts,setCarts]=useState<CartsModel[]>([]);
    useEffect(() => {
        if(id) {
            cartService.getCartUser(id)
                .then(({carts}:CartsRespons) => {setCarts(carts)});
        }

    }, [id]);
    return(
         <div>

             {
                 carts.map((cart:CartsModel)=>(<div key={cart.id}> {cart.total} </div>))
             }

         </div>
    )
};
import {useParams} from "react-router";
import type {CartsRespons} from "../modeles/Carts/CartsRespons.ts";
import {CartComponent} from "./CartComponent.tsx";
import {cartService} from "../services/api.service.tsx";
import type {CartsModel} from "../modeles/Carts/CartsModel.ts";
import {useEffect, useState} from "react";

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
                carts.map((cart:CartsModel)=>(<CartComponent cart={cart} key={cart.id}/>))
            }

        </div>
    )
};

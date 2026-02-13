import {useParams} from "react-router";
import type {CartsModel} from "../modeles/Carts/CartsModel.ts";
import {useEffect, useState} from "react";
import type {CartsRespons} from "../modeles/Carts/CartsRespons.ts";

export const CartsComponent=()=>{

    const {id}=useParams();
    const [carts,setCarts]=useState<CartsModel[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/carts/user/'+id)
            .then(res => res.json())
            .then(({carts}:CartsRespons) =>  {
                setCarts(carts);
            });
    }, [id]);
    return(
         <div>

             {
                 carts.map((cart:CartsModel)=>(<div> {cart.total}</div>))
             }

         </div>
    )
};
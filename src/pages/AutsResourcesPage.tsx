import {useEffect} from "react";
import {LoadAuthProducts, Refresh} from "../services/api.service.tsx";

export const AutsResourcesPage=()=>{

    useEffect(() => {
        LoadAuthProducts().then(products => {
            console.log(products);
        }).catch(e => {
            console.log(e);
            Refresh()
                .then(() =>  LoadAuthProducts())
                    .then(value=>console.log(value))
        });
    }, []);

    return(
        <> Auts Resources Page</>
    )
}
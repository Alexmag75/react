import type {Cars} from "../modeles/Cars.ts";
import type {FC} from "react";
import './CarComponent.css'
type Props = {
    cars: Cars;
}

export const CarComponent:FC<Props>=({cars}) => {
    return (
        <>
                       <div className='block-Cars'>
                                <p> {cars.brand}</p>
                        <p> Цена: {cars.price}</p>
                        <p>Год выпуска: {cars.year}</p>
                    </div>
        </>
    )
}

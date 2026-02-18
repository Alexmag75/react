import type {Cars} from "../modeles/Cars.ts";
import type {FC} from "react";

type Props = {
    cars: Cars;
}

export const CarComponent:FC<Props>=({cars}) => {
    return (
        <>
        <p> {cars.id} </p>
        </>
    )
}
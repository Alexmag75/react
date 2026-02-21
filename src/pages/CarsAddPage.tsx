import {useForm} from "react-hook-form";
import type {Cars} from "../modeles/Cars.ts";
import {carsValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCar} from "../services/service.tsx";

export const CarsAddPage=() => {

const {register, handleSubmit, formState: {errors}}=useForm<Cars>({mode:'all', resolver:joiResolver(carsValidator)});

const createhandler=(data:Cars)=>{
    addCar(data);

}
    return(
        <>
        <form onSubmit={handleSubmit(createhandler)}>
        <div>
            <input type="text" {...register('brand')} />
            <div> {errors.brand?.message}</div>
        </div>
        <div>
            <input type="number" {...register('price')} />
            <div> {errors.price?.message}</div>
        </div>
        <div>
            <input type="number" {...register('year')} />
            <div> {errors.year?.message}</div>
        </div>
              <button>AddCar</button>

        </form>

        </>
    )
}
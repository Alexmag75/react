import {useForm} from "react-hook-form";
import type {Cars} from "../modeles/Cars.ts";
import {carsValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCar} from "../services/service.tsx";
import './CarsAddPage.css'
export const CarsAddPage=() => {

const {register, handleSubmit, formState: {errors}}=useForm<Cars>({mode:'all', resolver:joiResolver(carsValidator)});

const createhandler=(data:Cars)=>{
    addCar(data);

}
    return(
        <>
            <form onSubmit={handleSubmit(createhandler)} className="car-form">
                <div className="input-group">
                    <input type="text" placeholder="Марка машины" {...register('brand')} />
                    <div className="error-message"> {errors.brand?.message}</div>
                </div>

                <div className="input-group">
                    <input type="number" placeholder="Цена" {...register('price')} />
                    <div className="error-message"> {errors.price?.message}</div>
                </div>

                <div className="input-group">
                    <input type="number" placeholder="Год выпуска" {...register('year')} />
                    <div className="error-message"> {errors.year?.message}</div>
                </div>

                <button type="submit" className="submit-btn">Добавить автомобиль</button>
            </form>

        </>
    )
}
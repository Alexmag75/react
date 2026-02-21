import {useEffect, useState} from "react";
import {getCars} from "../services/service.tsx";
import type {Cars} from "../modeles/Cars.ts";
import {CarComponent} from "../components/CarComponent.tsx";
import './CarsPage.css'
export const CarsPage=()=>{
        const [cars, setCars] = useState<Cars[]>([]);
        useEffect(() => {
        getCars().then(cars => {setCars(cars)});
         }, []);
return(
        <>
            <h1>Cars Catalog</h1>
            <div className='cars-container'>
            {
                cars.map((cars:Cars)=><CarComponent cars={cars} key={cars.id}/>)
            }
            </div>
        </>
    )
}
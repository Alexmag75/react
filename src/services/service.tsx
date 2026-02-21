import axios from "axios";
import type {Cars} from "../modeles/Cars.ts";

const axiosInstance=axios.create({
    baseURL:'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}

})
export const getCars = async ():Promise<Cars[]> => {
    const axiosResponse = await axiosInstance.get<Cars[]>("/cars");
        const cars=axiosResponse.data;
    return cars;

}

export const addCar=async (car:Cars)=>{
await axiosInstance.post<Cars>("/cars",car);
}
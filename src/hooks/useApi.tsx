import {useEffect, useState} from "react";

export const useApi = <T, >(url:string) => {

    const[data,setData] = useState<T>();

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then(value => {
                setData(value);
            });

    }, []);
    return data;
};
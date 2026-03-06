import {createContext} from "react";

type ContextValue ={
    theme: string,
    changeTheme:(theme:string) => void;
}

const defaultValue: ContextValue = {
    theme:'light',
    changeTheme:() => {}
}

export const Context=createContext<ContextValue>(defaultValue);
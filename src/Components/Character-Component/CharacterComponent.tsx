import type {ICharacter} from "../../Models/ICharacter.ts";
import type {ReactNode} from "react";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className="my-10 border-2">
           <h3 className='-end-1.5 font-bold'> {item.name}  {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};
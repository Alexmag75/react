import {simpsons} from "../../arrays.ts";
import {CharacterComponent} from "../Character-Component/CharacterComponent.tsx";

export const FamilyComponent=()=>{
        return(
            <div>
                {

                    simpsons.map((value, index) => (<CharacterComponent item={value} key={index}>
                        {value.info}

                    </CharacterComponent>))

                }

            </div>
        );
};
import type {iCourses} from "../../Models/iCourses.ts";
import type {ReactNode} from "react";
import './CoursesComponent.css'

interface  CoursesComponentProps{
    item: iCourses,
    children: ReactNode,
}
export const CoursesComponent = ( {item,children}:CoursesComponentProps) => {


    return (
           <div>
               <h3>{children}</h3>

               <p> hourDuration: {item.hourDuration}</p>
               <p>monthDuration: {item.monthDuration}</p>
               <p> modules: {item.modules.join(',  ')}</p>
           </div>
    );

};
import './CoursesComponents.css'
import {coursesAndDurationArray} from "../../arrays.ts";
import type {CourseModel} from '../../models/CourseModel/CourseModel.ts';
import {CourseComponents} from "../courseComponents/CourseComponets.tsx";

export const CoursesComponents = ()=>{
return(
    <>
    <ul>
        {
            coursesAndDurationArray.map((course:CourseModel,index)=>{
                return<CourseComponents course={course} key={index}/>
            })

        }
    </ul>

    </>
);
}
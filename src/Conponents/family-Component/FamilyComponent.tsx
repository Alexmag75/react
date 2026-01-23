import {coursesArray} from "../../data/coursesArray.ts";
import {CoursesComponent} from "../courses-Component/CoursesComponent.tsx";


export const FamilyComponent = () => {
    return (
        <>
            {
                coursesArray.map((course,index)=><CoursesComponent item={course} key={index}>
                    {course.title}
                </CoursesComponent>)
            }
        </>
    );

};
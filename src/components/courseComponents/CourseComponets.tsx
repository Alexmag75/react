import './CourseComponents.css'
import type {CourseModel} from "../../models/CourseModel/CourseModel.ts";
import type {FC} from "react";

type PropsType={
    course:CourseModel
}
export const CourseComponents: FC<PropsType> = ({course}) => {
    return (

                <li>
                    {course.title} {course.monthDuration}
                </li>


    );
}
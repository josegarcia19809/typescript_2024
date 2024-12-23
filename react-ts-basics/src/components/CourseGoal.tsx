import {FC, type ReactNode} from "react";

type CourseGoalProps = {
    title: string;
    children: ReactNode
}

// Usando una función flecha
const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
    return (
        <>
            <article>
                <div>
                    <h2>{title}</h2>
                    {children}
                </div>
                <button>Delete</button>
            </article>
        </>
    );
}

// function CourseGoal({title, children}: CourseGoalProps) {
//     return (
//         <>
//             <article>
//                 <div>
//                     <h2>{title}</h2>
//                     {children}
//                 </div>
//                 <button>Delete</button>
//             </article>
//         </>
//     );
// }

export default CourseGoal;
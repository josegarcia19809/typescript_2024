import {FC, type ReactNode} from "react";

type CourseGoalProps = {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void;
}

// Usando una función flecha
const CourseGoal: FC<CourseGoalProps> = ({id, title, children, onDelete}) => {
    return (
        <>
            <article>
                <div>
                    <h2>{title}</h2>
                    {children}
                </div>
                <button onClick={() => onDelete(id)}>Delete</button>
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
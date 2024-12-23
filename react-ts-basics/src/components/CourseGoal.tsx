import {type ReactNode} from "react";

type CourseGoalProps = {
    title: string;
    children: ReactNode
}

function CourseGoal({title, children}: CourseGoalProps) {
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

export default CourseGoal;
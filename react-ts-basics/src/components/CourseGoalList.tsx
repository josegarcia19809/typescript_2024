import {FC} from "react";

import CourseGoal from "./CourseGoal.tsx";
import {type CourseGoal as CGoal} from "../App.tsx"; // Debido al conflicto de nombres

interface CourseGoalListProps {
    goals: CGoal[]
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals}) => {
    return (
        <>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal title={goal.title}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CourseGoalList;
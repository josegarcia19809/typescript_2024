import {FC} from "react";

import CourseGoal from "./CourseGoal.tsx";
import {type CourseGoal as CGoal} from "../App.tsx"; // Debido al conflicto de nombres

interface CourseGoalListProps {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    return (
        <>
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            <p>{goal.description}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CourseGoalList;
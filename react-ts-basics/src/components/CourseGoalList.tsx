import {FC, ReactNode} from "react";

import CourseGoal from "./CourseGoal.tsx";
import {type CourseGoal as CGoal} from "../App.tsx";
import InfoBox from "./InfoBox.tsx"; // Debido al conflicto de nombres

interface CourseGoalListProps {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({goals, onDeleteGoal}) => {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet. Start adding some!
            </InfoBox>
        )
    }

    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="medium">
                You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        )
    }

    return (
        <>
            {warningBox}
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
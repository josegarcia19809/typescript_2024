import {useState} from "react";


import goalImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";

export type CourseGoal = {
    title: string;
    description: string;
    id: number;
}

export default function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal() {
        setGoals(prevGoals => {
            const newGoal: CourseGoal = {
                id: Math.random(),
                title: "Learn JavaScript",
                description: "Learn it in depth!"
            };
            return [...prevGoals, newGoal];
        })
    }

    function handleDeleteGoal(id: number) {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
    }

    return (
        <main>
            <Header image={{src: goalImg, alt: "A list of goals"}}>
                <h1>Your course goals</h1>
            </Header>
            <button onClick={handleAddGoal}>Add Goal</button>
            <CourseGoalList
                goals={goals}
                onDeleteGoal={handleDeleteGoal}
            />
        </main>
    )
}
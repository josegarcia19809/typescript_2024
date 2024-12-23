import {useState} from "react";

import CourseGoal from "./components/CourseGoal.tsx";
import goalImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

type CourseGoal = {
    title: string;
    description: string;
    id: number;
}

export default function App() {

    const [goals, setGoals] = useState<CourseGoal[]>([]);

    function handleAddGoal() {

    }

    return (
        <main>
            <Header image={{src: goalImg, alt: "A list of goals"}}>
                <h1>Your course goals</h1>
            </Header>
            <button onClick={handleAddGoal}>Add Goal</button>
            <CourseGoal title="Learn React + TypeScript">
                <p>Learn it from the ground up</p>
            </CourseGoal>
        </main>
    )
}
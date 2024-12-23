import CourseGoal from "./components/CourseGoal.tsx";
import goalImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";


export default function App() {
    return (
        <main>
            <Header image={{src: goalImg, alt: "A list of goals"}}>
                <h1>Your course goals</h1>
            </Header>
            <CourseGoal title="Learn React + TypeScript">
                <p>Learn it from the ground up</p>
            </CourseGoal>
        </main>
    )
}
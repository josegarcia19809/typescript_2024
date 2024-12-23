import {useRef, type FormEvent, FC} from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
}
const NewGoal: FC<NewGoalProps> = ({onAddGoal}) => {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset(); // Si se quiere limpiar el formulario
        onAddGoal(enteredGoal, enteredSummary)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="goal">Your goal</label>
                    <input id="goal" type="text" placeholder="Goal"
                           ref={goal}
                    />
                </p>
                <p>
                    <label htmlFor="summary">Short summary</label>
                    <input id="summary" type="text"
                           placeholder="Short summary"
                           ref={summary}
                    />
                </p>
                <p>
                    <button>Add Goal</button>
                </p>
            </form>
        </>
    );
};

export default NewGoal;
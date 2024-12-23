import {type FormEvent} from "react";

const NewGoal = () => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="goal">Your goal</label>
                    <input id="goal" type="text"/>
                </p>
                <p>
                    <label htmlFor="summary">Short summary</label>
                    <input id="summary" type="text"/>
                </p>
                <p>
                    <button>Add Goal</button>
                </p>
            </form>
        </>
    );
};

export default NewGoal;
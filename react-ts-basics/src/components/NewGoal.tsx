import {type FormEvent} from "react";

const NewGoal = () => {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        new FormData(event.currentTarget);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="goal">Your goal</label>
                    <input id="goal" type="text" name="goal" placeholder="Goal"/>
                </p>
                <p>
                    <label htmlFor="summary">Short summary</label>
                    <input id="summary" type="text" name="summary"
                           placeholder="Short summary"/>
                </p>
                <p>
                    <button>Add Goal</button>
                </p>
            </form>
        </>
    );
};

export default NewGoal;
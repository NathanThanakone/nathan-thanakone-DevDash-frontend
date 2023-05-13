import "./Goals.scss";
import { useRef, useState } from "react";
import Goal from "../Goal/Goal";
import axios from "axios";

function Goals({ goalsList }) {
    const formRef = useRef();
    const [name, setName] = useState("");
    
    // counter for remaining tasks in goals list
    const taskOneOrMore = goalsList.length !== 1 ? "tasks" : "task";
    const taskNumber = `${goalsList.length} ${taskOneOrMore} remaining`;

    function handleChange(event) {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // grab input data from form
        const goal = formRef.current.goalsInput.value;

        // new goal object for posting to server
        const newGoal = { goal };

        axios
            .post('http://localhost:8080/goals', newGoal)
            .then((response) => {
                console.log(newGoal);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="goals">
            <h1>Goals</h1>
            <form onSubmit={handleSubmit} ref={formRef}>
                <h2 className="label-wrapper">
                    <label htmlFor="goals-input"> Add a goal to the list! </label>
                </h2>
                <input type="text" id="goalsInput" className="goals__input" name="text" value={name} onChange={handleChange} autoComplete="off"/>
                <button type="submit" className="goals__add"> Add </button>
            </form>

            <h2 id="list-heading"> {taskNumber} </h2>
            <div className="goals-list">
                {goalsList.map((goal) => (
                    <Goal key={goal.id} goal={goal.goal}/>
                ))}
            </div>
      </div>
    )
}

export default Goals;
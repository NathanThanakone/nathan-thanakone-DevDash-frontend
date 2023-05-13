import "./Goal.scss";

function Goal(props) {
    const { goal } = props;

    return (
        <div className="goal-item">
            <div className="goal-item__input-container">
                <input id="todo-0" type="checkbox" defaultChecked={false} />
                <label className="goal-item__label" htmlFor="todo-0"> {goal} </label>
            </div>
            <div className="goal-item__buttons-container">
                <button type="button" className="goal-item__edit"> Edit </button>
                <button type="button" className="goal-item__delete"> Delete </button>
            </div>
        </div>
    )
}

export default Goal;
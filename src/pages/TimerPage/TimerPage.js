import "./TimerPage.scss";
import Timer from "../../components/Timer/Timer";
import TaskList from "../../components/TasksList/TasksList";

function TimerPage() {
    return (
        <div className="timerPage">
            <Timer />
            <TaskList />
        </div>
    )
}

export default TimerPage;
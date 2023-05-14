import "./Timer.scss";
import { useState, useEffect } from "react";

function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(10);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [timerId, setTimerId] = useState(null);

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        let minutes = displayMessage ? 24 : 4;
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
                }, 1000);
            setTimerId(id);
        } else {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [isRunning, seconds]);

    // prepends 0 to minutes and seconds if number is single digit/< 10
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // start/stop button click handler. 
    const handleStartStopClick = () => {
        setIsRunning(!isRunning);
    };

    // reset button click handler. sets values back to default when clicked
    const handleResetClick = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
        setDisplayMessage(false);
    };

    return (
        <div className="timer">
            <div className="timer__message">
                {displayMessage && <div>Time for a break! Back to work in:</div>}
            </div>
            <div className="timer__timer">
                {timerMinutes}:{timerSeconds}
            </div>
            <div className="timer__buttons">
                <button onClick={handleStartStopClick} className="timer__start-stop">{isRunning ? "Pause" : "Start"}</button>
                <button onClick={handleResetClick} className="timer__reset">Reset</button>
            </div>
        </div>
    );
}

export default Timer;
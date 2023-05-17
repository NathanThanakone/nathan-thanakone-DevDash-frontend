import "./Timer.scss";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer() {
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
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
        setMinutes(1);
        setSeconds(0);
        setDisplayMessage(false);
    };

    // calculate the percentage of time remaining for the progress bar
    const totalTimeInSeconds = 1 * 60;
    const remainingTimeInSeconds = minutes * 60 + seconds;
    const percentage = Math.round((remainingTimeInSeconds / totalTimeInSeconds) * 100);

    return (
        <section className="timer">
            <div className="timer__message">
                {displayMessage && <div>Time for a break! Back to work in:</div>}
            </div>
            <div className="timer__timer">
                <CircularProgressbar
                    value={percentage}
                    text={`${timerMinutes}:${timerSeconds}`}
                    styles={buildStyles({
                        strokeLinecap: 'round',
                        textSize: '30px',
                        pathTransitionDuration: 0.5,
                        pathColor: 'rgba(62, 152, 199)',
                        textColor: '#fcebdc',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>
            <div className="timer__buttons">
                <button onClick={handleStartStopClick} className="timer__start-stop">
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button onClick={handleResetClick} className="timer__reset">
                    Reset
                </button>
            </div>
        </section>
    );
}

export default Timer;




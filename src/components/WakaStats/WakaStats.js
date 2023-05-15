import "./WakaStats.scss";

function WakaStats({ wakaStats }) {
    const { best_day, human_readable_daily_average, human_readable_range, human_readable_total } = wakaStats;




    console.log(wakaStats.human_readable_daily_average);
    console.log(wakaStats.human_readable_range);
    console.log(wakaStats.human_readable_total)

    return (
        <div className="stats">
            <div className="stats__container1">
                {best_day && 
                    <div className="stats__best-day">
                        <span className="stats__best-day--text">Your most busy day this week was:</span><br/>
                        <span className="stats__best-day--day">{best_day.date}</span><br/>
                        <span className="stats__best-day--text">with</span><br/>
                        <span className="stats__best-day--day">{best_day.text}</span><br/>
                        <span className="stats__best-day--text">spent coding!</span>
                    </div>
                }
                {human_readable_daily_average &&
                    <div className="stats__daily-average">
                        <span></span>
                    </div>
                }
            </div>
        </div>
    )
}

export default WakaStats;
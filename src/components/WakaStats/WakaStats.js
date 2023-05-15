import "./WakaStats.scss";

function WakaStats({ wakaStats }) {
    const { best_day, human_readable_daily_average, human_readable_total } = wakaStats;

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__subcontainer">
                    {best_day && 
                        <div className="stats__best-day">
                            <span className="stats__best-day--text">Your most active day this week was:</span><br/>
                            <span className="stats__best-day--value">{best_day.date}</span><br/>
                            <span className="stats__best-day--text">with</span><br/>
                            <span className="stats__best-day--value">{best_day.text}</span><br/>
                            <span className="stats__best-day--text">spent coding!</span>
                        </div>
                    }
                    {human_readable_daily_average &&
                        <div className="stats__daily-average">
                            <span className="stats__daily-average--text">This week you have a Daily Average of:</span><br/>
                            <span className="stats__daily-average--value">{human_readable_daily_average}</span><br/>
                            <span className="stats__daily-average--text">last week you coded for a total of:</span><br/>
                            <span className="stats__daily-average--value">{human_readable_total}</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default WakaStats;
import "./WakaCodingActivity.scss";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // prevents 'line is not a registered controller error'

function WakaCodingActivity({ wakaCodingActivity }) {

    // data used to populate line chart
    const dataForChart = (wakaCodingActivity) => {
        const labels = wakaCodingActivity.map((item) => item.range.date);
        const values = wakaCodingActivity.map((item) => item.grand_total.hours + (item.grand_total.minutes / 60));
        return {
            labels: labels,
            datasets: [
                {
                    label: 'Total Hours/Day',
                    data: values,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        };
    }

    const chartData = dataForChart(wakaCodingActivity);

    return (
        <section>
            <div className="line-chart">
                <h1 className="line-chart__title"> Hours Coding Over Last 7 Days </h1>
                {/* line chart component with data and styling */}
                <Line 
                    data={chartData} 
                    options={{ 
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    color: '#625b54'
                                },
                                ticks: {
                                    color: '#fcebdc'
                                }
                            },
                            y: {
                                grid: {
                                    color: '#625b54'
                                },
                                ticks: {
                                    color: '#fcebdc'
                                }
                            }
                        }
                    }} />
            </div>
        </section>
    )
}

export default WakaCodingActivity;
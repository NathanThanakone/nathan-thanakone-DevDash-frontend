import "./WakaLanguages.scss";
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function WakaLanguages({ wakaLanguages }) {
    // colours for pie chart sections and legend
    const colours = ["#f1e05a", "#c6538c", "#292929", "#16ce40", "#F44D27", "#e34c26", "#dc9658", "#e38c00", "#563d7c", "#0060ac"];

    // data used to populate pie chart
    const chartData = {
        labels: wakaLanguages.map((item) => item.name),
        datasets: [
            {
                data: wakaLanguages.map((item) => item.percent),
                backgroundColor: colours,
                borderColor: '#36383e',
            }
        ]
    };

    return (
        <div>
            <div className="pie-chart">
                <h1 className="pie-chart__title"> Languages Used (%) </h1>
                {/* pie chart component with data and styling */}
                <Pie 
                    className="pie-chart__chart"
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                    color: '#36383e'
                                }
                            }
                          }
                    }}            
                />
            </div>
        </div>
    )
}

export default WakaLanguages;
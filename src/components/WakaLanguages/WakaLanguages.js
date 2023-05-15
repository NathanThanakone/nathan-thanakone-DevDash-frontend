import "./WakaLanguages.scss";
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function WakaLanguages({ wakaLanguages }) {

    // data used to populate pie chart
    const chartData = {
        labels: wakaLanguages.map((item) => item.name),
        datasets: [
            {
                data: wakaLanguages.map((item) => item.percent),
                backgroundColor: wakaLanguages.map((item) => item.color),
                borderColor: '#36383e',
            },
        ],
    };

    return (
        <div>
            <div className="pie-chart">
                <h1 className="pie-chart__title"> Languages Used (%) </h1>
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
                            },
                          },
                    }}            
                />
            </div>
        </div>
    )
}

export default WakaLanguages;
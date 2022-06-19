import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({dataPoints}) => {
  const dataPointsValue = dataPoints.map(dataPoint => {
    return dataPoint.value;
  });

  const totalMaxValue = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map(dataPoint => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

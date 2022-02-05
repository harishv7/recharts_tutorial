import {
  Legend,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { formatNumber } from "../utils/utils";

const colors = {
  Move: "#FC1E27",
  Stand: "#2AE0F8",
  Exercise: "#ADFF2F",
};

const style = {
  transform: "translateY(-1.5em)",
};

export default function RadialBarChartContainer({ data }) {
  const parseData = () => {
    const activity = {};
    data.map((entry) => {
      const completionRate = (entry.Current / entry.Target) * 100;
      activity[entry.Type] = {
        name: entry.Type,
        value: formatNumber(completionRate),
        fill: colors[entry.Type],
      };
    });
    return Object.values(activity);
  };

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadialBarChart
        data={parseData(data)}
        innerRadius="80%"
        outerRadius="30%"
        startAngle={90}
        endAngle={-270}
        barSize={70}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          dataKey={"value"}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          isAnimationActive
        ></RadialBar>
        <Legend iconSize={30} wrapperStyle={style} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

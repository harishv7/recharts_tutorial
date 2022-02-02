import {
  CartesianGrid,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Line,
  Legend,
} from "recharts";
import { formatNumber } from "../utils/utils";

export default function LineChartContainer({ data }) {
  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis
          dataKey={"Date"}
          padding={{ left: 10, right: 10 }}
          interval={20}
          fontSize={12}
        />
        <YAxis
          type="number"
          domain={[0, "dataMax + 300"]}
          tickFormatter={formatNumber}
        />
        <Tooltip />
        <Legend />
        <Line
          type={"monotone"}
          dataKey={"High"}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type={"monotone"}
          dataKey={"Low"}
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

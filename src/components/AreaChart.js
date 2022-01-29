import {
  CartesianGrid,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Area,
} from "recharts";

export default function AreaChartContainer({ data }) {
  return (
    <ResponsiveContainer>
      <AreaChart
        width={"100%"}
        height={"100%"}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey="Year" />
        <YAxis />
        <Area
          dataKey="Olivia"
          stackId="1"
          type="monotone"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          dataKey="Emma"
          stackId="1"
          type="monotone"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          dataKey="Ava"
          stackId="1"
          type="monotone"
          stroke="#969600"
          fill="#969600"
        />
        <Area
          dataKey="Charlotte"
          stackId="1"
          type="monotone"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  );
}

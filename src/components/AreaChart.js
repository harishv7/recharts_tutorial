import {
<<<<<<< HEAD
  CartesianGrid,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Area,
=======
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
>>>>>>> b3a3059d94c6714d366b9250a58daba03b8a2237
} from "recharts";

export default function AreaChartContainer({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Ava"
          stackId="1"
          stroke="#969600"
          fill="#493910"
        />
        <Area
          type="monotone"
          dataKey="Charlotte"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
<<<<<<< HEAD
          dataKey="Emma"
          stackId="1"
          type="monotone"
=======
          type="monotone"
          dataKey="Olivia"
          stackId="1"
>>>>>>> b3a3059d94c6714d366b9250a58daba03b8a2237
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
<<<<<<< HEAD
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
=======
          type="monotone"
          dataKey="Emma"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
>>>>>>> b3a3059d94c6714d366b9250a58daba03b8a2237
      </AreaChart>
    </ResponsiveContainer>
  );
}

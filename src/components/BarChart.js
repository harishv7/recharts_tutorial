import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
} from "recharts";

export default function BarChartContainer({ data }) {
  const parseData = () => {
    // Output of the function: [{Year: 2020, Real: 100, Fake: 80}]

    // {2020: {Year: 2020, RealTrees: 100, FakeTrees: 80}}
    const parsedData = {};
    data.map((entry) => {
      // initialise an entry for the year if it does not already exist
      if (!(entry.Year in parsedData)) {
        parsedData[entry.Year] = {
          Year: entry.Year,
          FakeTrees: 0,
          RealTrees: 0,
        };
      }

      if (entry.Type === "Real tree") {
        parsedData[entry.Year]["RealTrees"] += parseFloat(
          entry["Number of trees sold"]
        );
      } else {
        parsedData[entry.Year]["FakeTrees"] += parseFloat(
          entry["Number of trees sold"]
        );
      }
    });
    console.log(parsedData);
    return Object.values(parsedData);
  };

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        width={500}
        height={400}
        data={parseData(data)}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"Year"} tickCount={10} interval={0} fontSize={12} />
        <YAxis />
        <Legend />
        <Tooltip />
        <Bar dataKey="RealTrees" stackId="tree" fill="#8884d8" />
        <Bar dataKey="FakeTrees" stackId="tree" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}

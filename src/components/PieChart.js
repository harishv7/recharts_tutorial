import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A3333D",
  "#86BBD8",
  "#2F3061",
];

export default function PieChartContainer({ data }) {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);

  // runs once when the component is rendered
  useEffect(() => {
    parseData();
  }, [data]);

  const parseData = () => {
    const categories = {};
    const countries = {};
    data.map((entry) => {
      const currentCategory = entry["category_guardian"];
      const currentCountry = entry["country"];

      if (!(currentCategory in categories)) {
        categories[currentCategory] = {
          name: currentCategory,
          frequency: 1,
        };
      } else {
        categories[currentCategory]["frequency"] += 1;
      }

      if (!(currentCountry in countries)) {
        countries[currentCountry] = {
          name: currentCountry,
          frequency: 1,
        };
      } else {
        countries[currentCountry]["frequency"] += 1;
      }
    });

    setCategories(Object.values(categories));
    setCountries(Object.values(countries));
  };

  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <PieChart
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Pie
          dataKey="frequency"
          data={countries}
          cx={300}
          cy={100}
          outerRadius={100}
          label
          fill="#8884d8"
        />

        <Pie dataKey="frequency" data={categories} label>
          {categories.map((entry, index) => {
            return <Cell key={`cell-${index}`} fill={COLORS[index]} />;
          })}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

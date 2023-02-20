import React from "react";
import {
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ComposedChart,
} from "recharts";

export function RenderBarChart(data) {
  return (
    <ComposedChart
      layout="vertical"
      width={500}
      height={600}
      data={data.data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 30,
      }}
    >
      <CartesianGrid stroke="#FFFFFF" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" width={200} />
      <Tooltip />
      <Bar dataKey="life_time_CO2" barSize={90} fill="#006991" />
      <Line dataKey="price" stroke="#FFAAAA" />
    </ComposedChart>
  );
}

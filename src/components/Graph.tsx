import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import "../style/GraphStyle.css";

type dataType = {
  id: number;
  value: number;
  label: string;
  color: string;
};

const size = {
  width: 600,
  height: 400,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.shape.borderRadius.toString(),
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 6,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText
      x={left + width / 2}
      y={top + height / 2}
      style={{ fontSize: "2rem" }}
    >
      {children}
    </StyledText>
  );
}

function Graph({ data, title }: { data: dataType[]; title: string }) {
  return (
    <PieChart series={[{ data, innerRadius: 150 }]} {...size}>
      <PieCenterLabel>{title}</PieCenterLabel>
    </PieChart>
  );
}

export default Graph;

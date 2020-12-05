import React, { ReactComponentElement, ReactNode } from "react";

export interface YearLineProps {
  beginYear: number;
  endYear: number;
  y?: number | string;
}

export function YearsLine({ beginYear, endYear, y = 0 }: YearLineProps) {
  const HORIZONTAL_SHIFT = 100 / (endYear - beginYear);
  let years: ReactNode[] = [];

  let index = 0;
  for (let year = beginYear; year <= endYear; year++) {
    years.push(
      <React.Fragment key={year}>
        <text y={12} x={`${index * HORIZONTAL_SHIFT}%`} fill={"white"}>
          {year}
        </text>
      </React.Fragment>
    );
    index++;
  }

  console.log(years);

  return (
    <svg y={y} width={"100%"} viewBox={`0 0 100% 100%`}>
      <svg>
        <line
          x1="0"
          y1={0}
          x2={"100%"}
          y2={0}
          stroke={"white"}
          strokeWidth={3}
        />
        <g width={"50%"}>{years}</g>
      </svg>
    </svg>
  );
}

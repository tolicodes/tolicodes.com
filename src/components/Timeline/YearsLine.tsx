import React, { useRef } from "react";
import styled from "styled-components";
import { useSize } from "../../hooks/useSize";

interface YearLineProps {
  years: ReadonlyArray<number | string>;
  y: number;
  x: number;
}

const HEIGHT = 70;

const Container = styled.div`
  height: 42px;
  background-color: magenta;
`;

export function YearsLine({ years, ...props }: YearLineProps) {
  return (
    <svg>
      <line
        x1="0"
        y1={27}
        x2={"100%"}
        y2={27}
        stroke={"white"}
        strokeWidth={3}
      />
      <g>
        {years.map((year, index) => (
          <text key={year} y={30 + 12} x={index} fill={"white"}>
            {year}
          </text>
        ))}
      </g>
    </svg>
  );
}

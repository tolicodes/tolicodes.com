import { useSize } from "ahooks";
import React, { ReactElement, useLayoutEffect, useRef, useState } from "react";
import { Container } from "./Container";

export type DATE = string;
export type URL = string;

export interface Project {
  title: string;
  iconUrl: URL;
  tag: string;
  begin: DATE;
  end: DATE;
}

export interface TimeLineProps {
  items: ReadonlyArray<Project>;
  backgroundColor?: string;
}

// language=CSS
const style = `.cls-1 {
  fill: #dbd745;
}
.year{
    font-weight: bold;
    font-size: 20pt;
}`;

export function Timeline(props: TimeLineProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    setSize({
      width: ref.current?.getBoundingClientRect().width || 0,
      height: ref.current?.getBoundingClientRect().height || 0,
    });
  }, []);

  // language=CSS
  return (
    <Container ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size.width} ${size.height}`}
      >
        <defs>
          <style>{style}</style>
        </defs>
        <g id="project">
          <rect
            id={"project-1"}
            className="cls-1"
            width="180"
            height="54"
            rx="12.19"
          />
          <image
            x={10}
            y={10}
            href="https://cdn.thedoctorschannel.com/wp-content/themes/WhosWho/theme-2018/images/tdc-logo.svg"
            height={32}
            width={32}
          />
          <text
            x={10}
            y={
              document.getElementById("project-1")?.getBoundingClientRect()
                .height / 2
            }
          >
            The Doctor\'s Channel
          </text>
        </g>
        <g id="timeline">
          <line
            x1={0}
            y1={size.height - 30}
            x2={size.width}
            y2={size.height - 30}
            stroke="black"
          />
        </g>
        <g id="years">
          <text x={0} y={size.height} className="year">
            2015
          </text>
          <text x={size.width * 0.25} y={size.height} className="year">
            2016
          </text>
          <text x={size.width * 0.5} y={size.height} className="year">
            2017
          </text>
          <text x={size.width * 0.75} y={size.height} className="year">
            2018
          </text>
        </g>
      </svg>
    </Container>
  );
}

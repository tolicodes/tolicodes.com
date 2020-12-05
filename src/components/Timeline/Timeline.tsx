import React, { useRef } from "react";
import { useSize } from "../../hooks/useSize";
import { Container } from "./Container";
import { Project } from "./Project";
import { YearsLine } from "./YearsLine";

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
  projects: ReadonlyArray<Project>;
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
  const size = useSize(ref);
  const TAGS_HEIGHT = 83;
  const PROJECT_HEIGHT = 86;
  const YEARLINE_HEIGHT = 42;

  const tags = props.projects?.reduce<Set<string>>((tagsList, currentValue) => {
    tagsList.add(currentValue.tag);
    return tagsList;
  }, new Set());

  const years = Array.from(
    props.projects?.reduce<Set<string>>((yearsList, currentValue) => {
      yearsList.add(currentValue.begin.split("/")[0]);
      yearsList.add(currentValue.end.split("/")[0]);
      return yearsList;
    }, new Set())
  )
    .map((v) => parseInt(v))
    .sort();

  const projectsGroups: ReadonlyArray<ReadonlyArray<Project>> = [];
  const yearsLineY = tags.size * PROJECT_HEIGHT + TAGS_HEIGHT;
  const diagramHeight =
    TAGS_HEIGHT + tags.size * PROJECT_HEIGHT + YEARLINE_HEIGHT;

  return (
    <Container ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${size.width} ${diagramHeight}`}
      >
        {/*  /!*<defs>*!/*/}
        {/*  /!*  <style>{style}</style>*!/*/}
        {/*  /!*</defs>*!/*/}
        {/*  /!*<Tags tags={[]} />*!/*/}
        {/*  /!*{projectsGroups.map((pg) => (*!/*/}
        {/*  /!*  <ProjectGroup projects={pg} />*!/*/}
        {/*  /!*))}*!/*/}
        <YearsLine
          y={yearsLineY}
          beginYear={years?.[0]}
          endYear={years?.[years.length - 1]}
        />
      </svg>
    </Container>
  );
}

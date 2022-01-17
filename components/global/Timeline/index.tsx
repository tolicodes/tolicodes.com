import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Container,
  TimelineEntry,
  TimelineExperience,
  Type,
  TimelineYears,
  ExperienceItem,
} from "./styled";
import { monthDiff } from "../../../utils/helpers";

export interface IExperience {
  duration: {
    start: number;
    end?: number;
  };
  company: {
    image?: string;
    title: string;
    website?: string;
    industry?: string;
    technologies?: string[];
  };
}

export interface ITimelineEntry {
  type: string;
  color: string;
  experience: IExperience[];
}

export interface ITimeline {
  data: ITimelineEntry[];
}

interface IRangeYear {
  start: number;
  end: number;
}

interface TimelineProps {
  timeline: ITimeline;
}
const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  const yearsRef = useRef();
  const [range, _] = useState<IRangeYear>(() => {
    const r: IRangeYear = { start: 9999, end: -1 };
    for (let i = 0; i < timeline.data.length; i++) {
      for (let j = 0; j < timeline.data[i].experience.length; j++) {
        let s = new Date(timeline.data[i].experience[j].duration.start);
        let e = null;
        if (timeline.data[i].experience[j].duration.end) {
          e = new Date(timeline.data[i].experience[j].duration.end || 0);
        }

        if (s.getFullYear() < r.start) {
          r.start = s.getFullYear();
        }

        if (e && e.getFullYear() > r.end) {
          r.end = e.getFullYear();
        }
      }
    }

    return r;
  });
  const [yearWidth, setYearWidth] = useState(0);

  useEffect(() => {
    const sidebarWidth = 100;
    const width =
      (yearsRef?.current?.clientWidth || sidebarWidth) - sidebarWidth;
    const singleYearWidth = width / (range.end - range.start);
    setYearWidth(singleYearWidth);
  }, []);

  const calculatePositionAndWidth = (experienceItem: IExperience) => {
    const start = new Date(experienceItem.duration.start);
    const end = experienceItem.duration.end
      ? new Date(experienceItem.duration?.end)
      : new Date();

    const diff = monthDiff(start, end);
    const startYear = new Date();
    startYear.setFullYear(range.start);
    startYear.setMonth(0);
    startYear.setDate(1);
    const startDiff = monthDiff(start, startYear);

    const monthWidth = yearWidth / 12;

    console.log(`-- DEBUG Position -- "${experienceItem.company.title}"`, {
      yearWidth,
      start,
      end,
      startYear,
      durationInMonths: diff,
      leftPadding: startDiff,
      monthWidth,
    });

    return {
      left: monthWidth * startDiff,
      width: monthWidth * diff,
    };
  };

  return (
    <Container>
      {timeline.data.map((item, index) => (
        <TimelineEntry key={`${index}`}>
          <Type>{item.type}</Type>
          <TimelineExperience>
            {item.experience.map((exp, index) => {
              const { width, left } = calculatePositionAndWidth(exp);
              return (
                <ExperienceItem
                  theme={item.color}
                  key={`${index}`}
                  area={width}
                  left={left}
                >
                  {exp.company.image ? (
                    <Image
                      src={exp.company.image}
                      alt={exp.company.title}
                      // width={50}
                      // height={50}
                      layout={"fill"}
                      objectFit={"contain"}
                    />
                  ) : (
                    <p>{exp.company.title}</p>
                  )}
                </ExperienceItem>
              );
            })}
          </TimelineExperience>
        </TimelineEntry>
      ))}
      <TimelineYears ref={yearsRef}>
        {[...Array(range.end - range.start + 1)].map((_, index) => (
          <span key={`${index}`}>
            {index % 2 === 1 ? "" : index + range.start}
          </span>
        ))}
      </TimelineYears>
    </Container>
  );
};

export default Timeline;

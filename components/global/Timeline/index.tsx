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
    start: { date?: number; month: number; year: number };
    end?: { date?: number; month: number; year: number };
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
        const { start, end } = timeline.data[i].experience[j].duration;

        const s = new Date();
        s.setFullYear(start.year);
        s.setMonth(start.month - 1);

        let e = null;
        if (end) {
          e = new Date();
          e.setFullYear(end.year);
          e.setMonth(end.month - 1);
        }

        if (s.getFullYear() < r.start) {
          r.start = s.getFullYear();
        }

        if (e && e.getFullYear() > r.end) {
          r.end = e.getFullYear();
        }
      }
    }

    r.end++;
    return r;
  });
  const [yearWidth, setYearWidth] = useState(0);

  useEffect(() => {
    const width = yearsRef?.current?.clientWidth - 40;
    const singleYearWidth = width / (range.end - range.start);
    setYearWidth(singleYearWidth);
  }, [range]);

  const calculatePositionAndWidth = (experienceItem: IExperience) => {
    const start = new Date();
    start.setDate(1);
    start.setMinutes(0);
    start.setSeconds(0);
    start.setFullYear(experienceItem.duration.start.year);
    start.setMonth(experienceItem.duration.start.month - 1);

    const end = new Date();
    end.setDate(1);
    end.setMinutes(0);
    end.setSeconds(0);
    if (experienceItem.duration.end) {
      end.setFullYear(experienceItem.duration.end.year);
      end.setMonth(experienceItem.duration.end.month - 1);
    }

    const diff = monthDiff(start, end);
    const startYear = new Date();
    startYear.setFullYear(range.start);
    startYear.setMonth(0);
    startYear.setDate(1);
    const startDiff = monthDiff(start, startYear);
    const monthWidth = yearWidth / 12;

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
                    <div>
                      <Image
                        src={exp.company.image}
                        alt={exp.company.title}
                        layout={"fill"}
                        objectFit={"contain"}
                      />
                    </div>
                  ) : (
                    <>
                      <p>{exp.company.title}</p>
                    </>
                  )}
                </ExperienceItem>
              );
            })}
          </TimelineExperience>
        </TimelineEntry>
      ))}
      <TimelineYears ref={yearsRef} id="yearsTimeline">
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

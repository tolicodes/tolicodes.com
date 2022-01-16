import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Container,
  TimelineEntry,
  TimelineExperience,
  Type,
  TimelineYears,
  ExperienceItem,
} from "./styled";

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

  return (
    <Container>
      <div>
        {timeline.data.map((item, index) => (
          <div key={`${index}`}>
            <TimelineEntry>
              <Type>
                <p>{item.type}</p>
              </Type>
              <TimelineExperience>
                {item.experience.map((exp, index) => (
                  <ExperienceItem theme={item.color} key={`${index}`}>
                    {exp.company.image ? (
                      <Image
                        src={exp.company.image}
                        alt={exp.company.title}
                        width={25}
                        height={25}
                      />
                    ) : (
                      <p>{exp.company.title}</p>
                    )}
                  </ExperienceItem>
                ))}
              </TimelineExperience>
            </TimelineEntry>
          </div>
        ))}
        <TimelineYears>
          {[...Array(range.end - range.start + 1)].map((_, index) => (
            <p key={`${index}`}>{index % 2 === 1 ? "" : index + range.start}</p>
          ))}
        </TimelineYears>
      </div>
    </Container>
  );
};

export default Timeline;

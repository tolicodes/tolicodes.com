import React from "react";
import { SectionWrapper, Timeline } from "../../global";
import TimelineMock from "../../../mock/timeline";

interface IResume {
  companyLogo: "";
  companyName: "";
  points: string[];
  technologies: string[];
  images: string[];
}
const slides: IResume[] = [];

interface ResumeProps {}

const Resume = ({}: ResumeProps) => {
  return (
    <SectionWrapper title="Resume">
      {/* Carousel for companies */}
      {/* 
        <Carousel>
          {slides.map((item: IResume, index) => {
            return (
              <CarouselItem key={`${index}`}>
                <h1>{item.companyName}</h1>
              </CarouselItem>
            );
          })}
        </Carousel>
       */}

      <Timeline timeline={TimelineMock} />

      {/* Filters */}
    </SectionWrapper>
  );
};

export default Resume;

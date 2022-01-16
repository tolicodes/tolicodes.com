import styled from "styled-components";

interface ContainerProps {}
export const Container = styled.div<ContainerProps>`
  background-color: #e8e9e8;
  padding: 16px;
`;

interface TypeProps {}
export const Type = styled.div<TypeProps>`
  width: 100px;

  p {
    font-weight: bold;
    font-size: 14px;
  }
`;

interface TimelineEntryProps {}
export const TimelineEntry = styled.div<TimelineEntryProps>`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-bottom: 10px;
`;

interface TimelineExperienceProps {}
export const TimelineExperience = styled.div<TimelineExperienceProps>`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

interface TimelineYearsProps {}
export const TimelineYears = styled.div<TimelineYearsProps>`
  display: flex;
  margin-left: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;

  p {
    position: relative;
    margin-top: 10px;
    padding-top: 10px;
    font-weight: 600;

    &:after {
      content: "";
      position: absolute;
      top: -10px;
      height: 7px;
      left: 50%;
      width: 1px;
      background-color: black;
      transform: translate(-50%);
    }
  }
`;

interface ExperienceItemProps {
  theme: string;
}
export const ExperienceItem = styled.div<ExperienceItemProps>`
  background-color: ${(props) => props.theme};
  padding: 5px;
`;

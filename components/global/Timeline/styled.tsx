import styled from "styled-components";

interface ContainerProps {}
export const Container = styled.div<ContainerProps>`
  background-color: #e8e9e8;
  padding: 16px;
`;

interface TypeProps {}
export const Type = styled.p<TypeProps>`
  width: 100px;
  min-width: 100px;
  font-weight: bold;
  font-size: 14px;
`;

interface TimelineEntryProps {}
export const TimelineEntry = styled.div<TimelineEntryProps>`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  align-items: center;
`;

interface TimelineYearsProps {}
export const TimelineYears = styled.div<TimelineYearsProps>`
  display: flex;
  margin-left: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;

  span {
    position: relative;
    margin-top: 10px;
    padding-top: 10px;
    font-weight: 600;
    min-width: 40px;
    text-align: center;

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

interface TimelineExperienceProps {
  depth: number;
}
export const TimelineExperience = styled.div<TimelineExperienceProps>`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  margin: 0 20px;
  height: ${(props) => props.depth * 60}px;
`;

interface ExperienceItemProps {
  theme: string;
  area: number;
  left: number;
  level: number;
}
export const ExperienceItem = styled.div<ExperienceItemProps>`
  background-color: ${(props) => props.theme};
  position: absolute;
  left: ${(props) => props.left}px;
  width: ${(props) => props.area}px;
  padding: 8px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.level * 60}px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

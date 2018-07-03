import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 5px;
`;

export const MainSection = styled(Section)`
  background: #dddedd;
`;

export const AltSection = styled(Section)`
  margin-top: -5px;
  background: #f4f3f5;
  padding-bottom: 20px;
`;

export const Heading = styled.h2`
  margin-bottom: 5px;
  margin-top: 20px;
  font-family: 'Anton', sans-serif;
`;

export const CenterContainer = styled.div`
  max-width: 780px;
  padding: 0 20px;
  margin: 0 auto;

  text-align: justify;
`;

export const Slide = styled.div`
  width: 100%;
`;

export const SlideImage = styled.img`
  width: 50%;
  height: auto;
`;

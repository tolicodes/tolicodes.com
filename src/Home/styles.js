import styled, { css } from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
`;

export const MainSection = styled(Section)`
  background: #dddedd;
`;

export const AltSection = styled(Section)`
  margin-top: -5px;
  background: #f4f3f5;
  padding-bottom: 20px;
`;

export const Heading = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-family: 'Anton', sans-serif;
  font-size: 30px;
`;

export const CenterContainer = styled.div`
  max-width: 780px;
  padding: 0 20px;
  margin: 0 auto;

  text-align: justify;
`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

export const SlideImage = styled.img`
  width: 50%;
  height: auto;
`;

export const SlideTextContainer = styled.div`
  display: flex;
  width: 50%;

  ${({ left }) => css`
    justify-content: ${left ? 'flex-end' : 'flex-start'};
  `}
`;

export const SlideText = styled.div`
  background-color: #f4f3f5;
  padding: 0 20px;
  width: ${768 / 2}px;
  text-align: left;

  padding-bottom: 99999px;
  margin-bottom: -99999px;
`;

export const SlideHeading = styled.h2`
  text-align: center;
`;

export const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-content: center;

  border-radius: 2px;
  border: none;

  padding: 8px 16px;

  background-color: #0097a7;
  color: white;

  text-decoration: none;

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

  cursor: pointer;

  :focus {
    outline: 0;
  }

  &:hover {
    box-shadow: none;
  }
`

export const Button = styled.button`
  ${buttonStyles};
`;

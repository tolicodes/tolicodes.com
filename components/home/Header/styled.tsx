import styled from "styled-components";

interface ContainerProps {}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
`;

interface NavWrapperProps {}
export const NavWrapper = styled.div<NavWrapperProps>`
  background-color: #ff652e;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface LogoProps {}
export const Logo = styled.div<LogoProps>`
  font-family: "PT Mono", monospace;
  text-align: center;

  h1 {
    font-size: 34px;
  }

  p {
    font-size: 14px;
  }
`;

interface SocialMediaLinksProps {}
export const SocialMediaLinks = styled.div<SocialMediaLinksProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
  margin: 16px 0;

  img {
    width: 22px;
    height: 22px;
  }
`;

interface NavbarProps {}
export const Navbar = styled.nav<NavbarProps>`
  width: 820px;
  height: 40px;

  ul {
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    column-gap: 2px;
    padding-left: 0;
    display: grid;
    height: 100%;
    margin: 0;

    li {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;

      a {
        width: 100%;
        height: 100%;
        color: #ff652e;
        line-height: 40px;
        text-align: center;
        white-space: nowrap;
        background-color: #272727;

        &:hover {
          background-color: #111111;
        }
      }
    }
  }
`;

interface WatchMyStoryProps {}
export const WatchMyStory = styled.section<WatchMyStoryProps>`
  background-color: #272727;
  color: white;
  text-align: center;
  width: 100%;

  h1 {
    margin: 20px;
    font-family: "PT Mono", monospace;
  }

  iframe {
    width: 100%;
    min-height: 70vh;
  }
`;

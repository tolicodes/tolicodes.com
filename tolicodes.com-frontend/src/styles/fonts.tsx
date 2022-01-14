import { css } from "styled-components";

export const CSSFonts = css`
  @import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
`;

export const CSSHeaderSubtitle = css`
  font-family: "PT Mono", monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.498221px;
`;

export const CSSNavbarLink = css`
  font-family: "Arial", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.435943px;
`;

export const CSSNavbarLinkBold = css`
  ${CSSNavbarLink};

  font-weight: bold;
`;

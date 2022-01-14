import { css } from "styled-components";

export const CSSFonts = css`
  @import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
`;

export const CSSFontFamilyPTMono = css`
  font-family: "PT Mono", monospace;
`;

export const CSSFontFamilyArial = css`
  font-family: "Arial", "Helvetica", sans-serif;
`;

export const CSSHeaderSubtitle = css`
  ${CSSFontFamilyPTMono};

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.498221px;
`;

export const CSSNavbarLink = css`
  ${CSSFontFamilyArial};

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.435943px;
`;

export const CSSNavbarLinkBold = css`
  ${CSSNavbarLink};

  font-weight: bold;
`;

export const CSSPortfolioTitle = css`
  ${CSSFontFamilyArial};

  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 40px;
  letter-spacing: 0.762901px;
`;

export const CSSPortfolioDescription = css`
  ${CSSFontFamilyArial};

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.523132px;
`;

export const CSSPortfolioDescriptionBold = css`
  ${CSSPortfolioDescription};

  font-weight: bold;
`;

export const CSSSectionTitle = css`
  ${CSSFontFamilyPTMono};

  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.797153px;
`;

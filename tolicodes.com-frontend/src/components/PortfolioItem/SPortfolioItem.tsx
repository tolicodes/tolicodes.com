import styled, { css } from "styled-components";
import { CSSPortfolioTitle, CSSPortfolioDescriptionBold } from "../../styles";

export const SPortfolioListItem = styled.div`
  width: 585px;
  height: 601px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--ui-02);
`;

export const SPortfolioImageWrapper = styled.div`
  width: 100%;
  height: 290px;

  object-fit: cover;

  img {
    width: 100%;
  }
`;

export const SPortfolioTextWrapper = styled.div`
  padding: 0 30px;

  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextWrap = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 460px;
`;

export const SPortfolioTitle = styled.p`
  ${CSSPortfolioTitle};
  ${TextWrap};
`;

export const SPortfolioDescription = styled.p`
  margin-top: 16px;

  ${CSSPortfolioDescriptionBold};
`;

export const SPortfolioButtonsWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

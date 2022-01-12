import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./reset";
import { CSSColors } from "./colors";

export const GSBase = createGlobalStyle`
    ${CSSReset}
    ${CSSColors}
`;

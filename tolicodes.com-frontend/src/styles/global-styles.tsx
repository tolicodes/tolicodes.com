import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./reset";
import { CSSColors } from "./colors";
import { CSSFonts } from "./fonts";

export const GSBase = createGlobalStyle`
    ${CSSReset}
    ${CSSColors}
    ${CSSFonts}
`;

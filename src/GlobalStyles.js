import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


// 전역 CSS

const GlobalStyles = createGlobalStyle`
  ${reset};
  html {
    font-size: 10px;
  };
  em {
    font-weight: bolder;
    color: orange
  }
`;

export default GlobalStyles;
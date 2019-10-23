import { createGlobalStyle } from "styled-components"

import { css } from "styled-components"

const sizes = {
  xl: 1920,
  lg: 1300,
  md: 1000,
  sm: 768,
  xs: 500,
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: TTNorms;
    font-weight: 400;
    font-style: normal;
    src: url("/static/fonts/TTNorms-Regular.eot");
    src: url("/static/fonts/TTNorms-Regular.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/TTNorms-Regular.woff2") format("woff2"),
      url("/static/fonts/TTNorms-Regular.woff") format("woff"),
      url("/static/fonts/TTNorms-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: TTNorms;
    font-weight: 500;
    font-style: normal;
    src: url("/static/fonts/TTNorms-Medium.eot");
    src: url("/static/fonts/TTNorms-Medium.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/TTNorms-Medium.woff2") format("woff2"),
      url("/static/fonts/TTNorms-Medium.woff") format("woff"),
      url("/static/fonts/TTNorms-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: TTNorms;
    font-weight: 800;
    font-style: normal;
    src: url("/static/fonts/TTNorms-Regular.eot");
    src: url("/static/fonts/TTNorms-Regular.eot?#iefix") format("embedded-opentype"),
      url("/static/fonts/TTNorms-Regular.woff2") format("woff2"),
      url("/static/fonts/TTNorms-Regular.woff") format("woff"),
      url("/static/fonts/TTNorms-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "PTSans";
    font-weight: 400;
    font-style: normal;
    src: url("/static/fonts/PTSans-Regular.ttf");
    src: url("/static/fonts/PTSans-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "PTSansBold";
    font-weight: 400;
    font-style: normal;
    src: url("/static/fonts/PTSans-Bold.ttf");
    src: url("/static/fonts/PTSans-Bold.ttf") format("truetype");
  }

  :root {
    --main-dark: #252525;
    --main-red: #EF5120;  

    --font-heading: PTSansBold, sans-serif;
    --font-button: PTSansBold, sans-serif;
    --font-navigation: PTSans, sans-serif;
    --font-text: PTSans, sans-serif;

    --tile-content-width: 34rem;
  }

  :root,
  body {
    box-sizing: border-box;
    overflow: hidden;
    font-size: 14px;
    color: "#fff";
    background-repeat: repeat;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    font-size: 14px;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: var(--font-text);
    font-variant-ligatures: discretionary-ligatures;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: "#fff";
  }

  div {
    transition: all 0.8s ease 0s;;
  }

  .over {
    background-color: var(--bw15);
    pointer-events: none;
  }

  #__next {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
  }

  #root {
    height: 100vh;
  }
`

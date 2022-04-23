import { createGlobalStyle } from "styled-components"

export const colors = {
    primary:'#ff385c',
    white:'#fff',
    lightGray: '#dddddd'
}

export const lightTheme = {
    body: '#ffffff',
    fontColor: '#2b2b2b',
    mainShadow: '#dddddd',
    bodyHover: '#cccccc',
    ...colors
}
export const darkTheme= {
    body: '#2b2b2b',
    fontColor: '#e2e2e2',
    mainShadow:'#1b1b1b',
    bodyHover: '#141414',
    ...colors
}


export interface DefaultTheme {
    body: string,
    fontColor:string,
    primary:string
}

export const GlobalStyles = createGlobalStyle<{theme:DefaultTheme}>`
  body {
      background-color: ${(props) => props.theme.body};
  }
`
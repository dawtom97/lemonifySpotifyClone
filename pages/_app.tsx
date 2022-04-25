import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/themes";
import { createContext, useState } from "react";
import { ThemeEnums } from "../enums/ThemeEnums";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { PlayerComponent } from "../components/PlayerComponent/PlayerComponent";

const ThemeButton = styled.button`
  
  position: absolute;
  right:0;
  top:0px;
  border: none;
  background-color: transparent;
`

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [theme, setTheme] = useState(ThemeEnums.light);

  // Theme colors changer
  const themeToggler = () => {
    theme === ThemeEnums.light
      ? setTheme(ThemeEnums.dark)
      : setTheme(ThemeEnums.light);
  };

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        theme={theme === ThemeEnums.light ? lightTheme : darkTheme}
      >
        <GlobalStyles />

        <RecoilRoot>
          <Component toggler={themeToggler} {...pageProps} />
          <PlayerComponent/>
        </RecoilRoot>

        <ThemeButton onClick={themeToggler}>Zmień</ThemeButton>
    
      
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

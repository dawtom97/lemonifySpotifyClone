import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes/themes";
import { createContext, useState } from "react";
import { ThemeEnums } from "../enums/ThemeEnums";
import { SessionProvider } from "next-auth/react";

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

        <Component toggler={themeToggler} {...pageProps} />

        <button onClick={themeToggler}>Zmień</button>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

import "@/styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../ThemeContext";

function MyApp({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    console.log(document.getElementsByTagName("html")[0]);
    document
      .getElementsByTagName("html")[0]
      .classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <MyApp Component={Component} pageProps={pageProps} />
  </ThemeProvider>
);

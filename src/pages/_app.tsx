import Header from "@/components/common/header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

const theme = {
  PersonalGreen100: "#A8F8E9",
  PersonalGreen200: "#8EDACC",
  PersonalGreen300: "#84BDB3",
  Gray100: "#DEDEDE",
  Gray300: "#B0B0B0",
  Gray500: "#8E8E8E",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  );
}

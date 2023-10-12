import Header from "@/components/common/header/Header";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

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

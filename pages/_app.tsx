import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import { useEffect } from "react";
import { Categories } from "../public/static/assets/ConfigRoutes";
import i18n from "../i18n";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

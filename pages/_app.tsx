import type { AppProps } from "next/app";
import Web3ContextProvider from "../context/Web3Context";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ContextProvider>
  );
}

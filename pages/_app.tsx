import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../store/apollo";
import Fonts from "../components/common/Fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Fonts />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;

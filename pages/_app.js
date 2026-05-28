import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/globals.css";
import "../styles/themes.css";
import user from "../data/user.json";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <ErrorBoundary>
      <Layout>
        <Head title={`${user.name} | ${pageProps.title}`} />
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;

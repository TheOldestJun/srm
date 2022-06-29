import "../styles/globals.scss";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Система управления снабжением предприятия</title>
        <link rel='icon' href='/img/splash.svg' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

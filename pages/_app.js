import "../styles/globals.css";
import DataProvider from "../contexts/DataContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;

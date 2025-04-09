import '../styles/globals.css';
import { WishlistProvider } from '../context/WishlistContext';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WishlistProvider>
  );
}

export default MyApp;

import Head from 'next/head'
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import 'styles/globals.css'
import 'styles/layout.css';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Front-End Misc</title>
        <meta name="description" content="Front-End Next Js Practice" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

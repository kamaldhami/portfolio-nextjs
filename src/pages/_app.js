import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

 useEffect(() => {
   typeof document !== undefined ? require("bootstrap/dist/js/bootstrap") : null;
 }, []);

  return <main> <Component {...pageProps} /></main>
}

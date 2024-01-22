import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode styles to the entire body
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return <Component {...pageProps} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />;
}

export default MyApp;

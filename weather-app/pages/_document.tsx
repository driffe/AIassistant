import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="manifest" href="../public/manifest.json" />
      <link
          href="/public/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
      />
      <link
          href="images/favicons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

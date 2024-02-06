import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

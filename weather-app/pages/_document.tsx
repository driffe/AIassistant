import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Head />
      <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

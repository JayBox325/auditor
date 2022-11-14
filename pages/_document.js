// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Another auditor</title>
        <meta name="description" content="This is another website auditor" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
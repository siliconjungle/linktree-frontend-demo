import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }

  render() {
    const { crossOrigin, nonce } = this.props
    return (
      <Html lang="en">
      <Head crossOrigin={crossOrigin} nonce={nonce}>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico" />
        {/* Step 5: Output the styles in the head  */}
        {this.props.styleTags}
      </Head>
      <body>
      <Main />
      <NextScript crossOrigin={crossOrigin} nonce={nonce} />
      </body>
      </Html>
    )
  }
}

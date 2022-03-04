import * as React from 'react'

import Layout from '../common/Layout'
import Widget from '../widget/Widget'
import Header from '../header/Header';

import { Helmet } from "react-helmet"

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  body {
    font-family: 'Lato', sans-serif;
  }
`

const IndexPage = () => {

  return (
    <main>
      <Helmet>
        <title>Thank you Poland!</title>
        <link rel="icon" type="image/x-icon" href="https://thanks-poland.s3.us-east-2.amazonaws.com/Ukraine-Flag-icon.png"/>
        <meta property="og:title" content="Thank you Poland!" />
        <meta property="og:description" content="Every day, tens of thousands of refugees from 125 countries find safety in Poland." />
        <meta property="og:image" content="https://thanks-poland.s3.us-east-2.amazonaws.com/image.png"/>
        <meta name="description" content="Every day, tens of thousands of refugees from 125 countries find safety in Poland." />
      </Helmet>
      <GlobalStyle />
      <Layout pageTitle="Thank you Poland!">
        <Header></Header>
        <Widget></Widget>
      </Layout>
    </main>
  )
}

export default IndexPage